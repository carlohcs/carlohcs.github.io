#!/usr/bin/env node

const https = require('https')
const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')

const MEDIUM_USER = 'carlohcs'
const POSTS_DIR = path.join(__dirname, '../content/blog')
const IMAGES_DIR = path.join(__dirname, '../static/img/blog');

[POSTS_DIR, IMAGES_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
})

async function importFromRSS() {
  const rssUrl = `https://medium.com/@${MEDIUM_USER}/feed`
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`

  console.log('📡 Baixando RSS feed do Medium via rss2json...')

  return new Promise((resolve, reject) => {
    https.get(apiUrl, (res) => {
      let data = ''

      res.on('data', chunk => data += chunk)
      res.on('end', async () => {
        try {
          const jsonData = JSON.parse(data)

          if (jsonData.status !== 'ok') {
            throw new Error(`Erro da API rss2json: ${jsonData.message || 'Status não OK'}`)
          }

          const posts = await parseJSONFeed(jsonData)
          console.log(`✅ Encontrados ${posts.length} posts no RSS`)
          resolve(posts)
        } catch (error) {
          reject(error)
        }
      })
    }).on('error', reject)
  })
}

async function parseJSONFeed(jsonData) {
  console.log(`📊 Feed info: ${jsonData.feed.title} - ${jsonData.items.length} items`)

  const posts = []

  for (const item of jsonData.items) {
    try {
      const title = item.title || ''
      const link = item.link || item.guid || ''
      const pubDate = item.pubDate || new Date().toISOString()
      const description = item.description || ''
      const content = item.content || item.description || ''

      // Extrair slug da URL
      const slug = link.split('/').pop().split('?')[0] ||
                   title.toLowerCase()
                     .replace(/[^a-z0-9]+/g, '-')
                     .replace(/(^-|-$)/g, '')

      const post = {
        title: cleanTitle(title),
        slug,
        link,
        date: new Date(pubDate).toISOString().split('T')[0],
        content: await cleanContent(content),
        excerpt: extractExcerpt(description),
        author: item.author || jsonData.feed.title || '',
        categories: item.categories || []
      }

      console.log(`📝 Processando: ${post.title.substring(0, 50)}...`)
      posts.push(post)
    } catch (itemError) {
      console.warn('⚠️ Erro ao processar item:', itemError.message)
      continue
    }
  }

  return posts
}

function cleanTitle(title) {
  return title.replace(/ \| by .+ \| .+$/, '').trim()
}

function getOriginalImageName(url) {
  try {
    const urlObj = new URL(url)
    let pathname = urlObj.pathname

    // Remove parâmetros de redimensionamento do Medium
    pathname = pathname.replace(/\/max\/\d+\//, '/')
    pathname = pathname.replace(/\/fit\/\d+\//, '/')

    // Extrai o nome do arquivo
    const filename = path.basename(pathname)

    // Se não tem extensão, adiciona .jpg
    if (!path.extname(filename)) {
      return filename + '.jpg'
    }

    // Sanitiza o nome do arquivo
    return filename.replace(/[^a-zA-Z0-9.-]/g, '_')
  } catch (error) {
    // Fallback para URLs malformadas
    const timestamp = Date.now()
    const randomId = Math.random().toString(36).substr(2, 6)
    return `medium-image-${timestamp}-${randomId}.jpg`
  }
}

function isImageValid(filepath) {
  try {
    if (!fs.existsSync(filepath)) {
      return false
    }

    const stats = fs.statSync(filepath)

    // Verifica se o arquivo tem tamanho razoável (> 1KB)
    if (stats.size < 1024) {
      console.log(`🗑️ Arquivo muito pequeno, será redownload: ${path.basename(filepath)}`)
      return false
    }

    // Verifica se é um arquivo de imagem válido lendo os primeiros bytes
    const buffer = fs.readFileSync(filepath, { start: 0, end: 10 })
    const header = buffer.toString('hex')

    // Verifica assinaturas de arquivo de imagem
    const imageSignatures = [
      'ffd8ff',    // JPEG
      '89504e47',  // PNG
      '47494638',  // GIF
      '52494646'   // WebP (RIFF)
    ]

    const isValidImage = imageSignatures.some(sig =>
      header.toLowerCase().startsWith(sig.toLowerCase())
    )

    if (!isValidImage) {
      console.log(`🗑️ Arquivo não é uma imagem válida, será redownload: ${path.basename(filepath)}`)
      return false
    }

    return true
  } catch (error) {
    console.log(`🗑️ Erro ao verificar imagem, será redownload: ${path.basename(filepath)}`)
    return false
  }
}

async function cleanContent(html) {
  // Verificar se o conteúdo já é HTML válido
  if (!html || typeof html !== 'string') {
    return ''
  }

  const dom = new JSDOM(html)
  const doc = dom.window.document

  // Remove elementos desnecessários
  doc.querySelectorAll('script, style, .medium-zoom-image, nav, header, footer').forEach(el => el.remove())

  // Remove atributos desnecessários mas mantém os importantes
  doc.querySelectorAll('*').forEach(el => {
    const keepAttrs = ['src', 'href', 'alt', 'title', 'width', 'height']
    const attrs = [...el.attributes]
    attrs.forEach(attr => {
      if (!keepAttrs.includes(attr.name)) {
        el.removeAttribute(attr.name)
      }
    })
  })

  // Converte imagens do Medium para locais e baixa
  const imagePromises = []
  let imageCounter = 0
  let imagesArray = [...doc.querySelectorAll('img')]

  // remove the static.jpg image from Medium
  doc.body.removeChild(imagesArray[imagesArray.length - 1])

  // remove the static.jpg image from Medium
  const images = imagesArray.splice(0, imagesArray.length - 1)

  images.forEach(img => {
    const src = img.src

    if (src && (src.includes('medium.com') || src.includes('cdn-images'))) {
      imageCounter++

      // Usa nome original da imagem
      const filename = getOriginalImageName(src)
      const filepath = path.join(IMAGES_DIR, filename)

      img.src = `/static/img/blog/${filename}`
      img.setAttribute('data-original-src', src)
      img.setAttribute('onerror', `this.onerror=null;this.src='${src}';`)

      // Só baixa se não existe ou está inválida
      if (!isImageValid(filepath)) {
        console.log(`📥 Preparando download da imagem ${imageCounter}: ${filename}`)
        imagePromises.push(downloadImage(src, filename))
      } else {
        console.log(`✅ Imagem já válida: ${filename}`)
      }
    }
  })

  // Aguarda todas as imagens serem baixadas
  if (imagePromises.length > 0) {
    console.log(`⏳ Baixando ${imagePromises.length} imagens novas/inválidas...`)
    try {
      await Promise.all(imagePromises)
      console.log(`✅ Todas as ${imagePromises.length} imagens foram processadas`)
    } catch (error) {
      console.warn('⚠️ Erro ao baixar algumas imagens:', error.message)
    }
  } else {
    console.log(`✅ Todas as imagens já estão válidas (${imageCounter} imagens)`)
  }

  return doc.body.innerHTML
}

function extractExcerpt(content) {
  const dom = new JSDOM(content)
  const text = dom.window.document.body.textContent || ''
  return text.substring(0, 200).trim() + (text.length > 200 ? '...' : '')
}

function generateMarkdownFile(post) {
  const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
slug: "${createPostUrl(post)}"
date: "${post.date}"
excerpt: "${post.excerpt.replace(/"/g, '\\"')}"
source: "medium"
originalUrl: "${post.link}"
author: "${post.author.replace(/"/g, '\\"')}"
categories: [${post.categories.map(cat => `"${cat.replace(/"/g, '\\"')}"`).join(', ')}]
---

`

  return frontmatter + post.content
}

function sanitizeSlug(slug) {
  let finalSlug

  finalSlug = decodeURIComponent(slug).toLowerCase()

  // Normaliza caracteres especiais (ç -> c, á -> a, é -> e, etc.)
  finalSlug = finalSlug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // Remove caracteres especiais e espaços, mantém apenas letras, números e hífens
  finalSlug = finalSlug.replace(/[^a-z0-9]+/g, '-')

  // Remove hífens no início e fim
  finalSlug = finalSlug.replace(/^-|-$/g, '')

  return finalSlug
}

function createPostUrl(post) {
  return `${post.date}-${sanitizeSlug(post.slug)}`
}

function savePost(post) {
  const filename = `${createPostUrl(post)}.md`
  const filepath = path.join(POSTS_DIR, filename)
  const markdown = generateMarkdownFile(post)

  fs.writeFileSync(filepath, markdown, 'utf8')
  console.log(`💾 Salvo: ${filename}`)

  return filepath
}

async function downloadImage(url, filename, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(IMAGES_DIR, filename)

    // Remove arquivo inválido se existir
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath)
      console.log(`🗑️ Removido arquivo inválido: ${filename}`)
    }

    const downloadFromUrl = (currentUrl, redirectCount = 0) => {
      if (redirectCount > maxRedirects) {
        reject(new Error(`Muitos redirecionamentos para ${url}`))
        return
      }

      // Suporta tanto HTTP quanto HTTPS
      const client = currentUrl.startsWith('https:') ? https : require('http')

      const file = fs.createWriteStream(filepath)

      client.get(currentUrl, (response) => {
        // Verifica redirecionamentos
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          file.close()
          fs.unlink(filepath, () => {}) // Remove arquivo parcial

          let redirectUrl = response.headers.location

          // Se o redirect é um caminho relativo, constrói URL absoluta
          if (redirectUrl.startsWith('/')) {
            const urlObj = new URL(currentUrl)
            redirectUrl = `${urlObj.protocol}//${urlObj.host}${redirectUrl}`
          }

          console.log(`🔄 Redirecionando: ${response.statusCode} -> ${redirectUrl}`)
          downloadFromUrl(redirectUrl, redirectCount + 1)
          return
        }

        // Verifica se a resposta é bem-sucedida
        if (response.statusCode !== 200) {
          file.close()
          fs.unlink(filepath, () => {}) // Remove arquivo parcial
          reject(new Error(`Erro HTTP: ${response.statusCode} para ${currentUrl}`))
          return
        }

        response.pipe(file)

        file.on('finish', () => {
          file.close()

          // Verifica se a imagem baixada é válida
          if (isImageValid(filepath)) {
            console.log(`🖼️ Imagem baixada e validada: ${filename}`)
            resolve(filepath)
          } else {
            console.log(`❌ Imagem baixada mas inválida: ${filename}`)
            fs.unlink(filepath, () => {}) // Remove arquivo inválido
            reject(new Error(`Imagem baixada é inválida: ${filename}`))
          }
        })

        file.on('error', (err) => {
          fs.unlink(filepath, () => {}) // Remove arquivo parcial
          reject(err)
        })
      }).on('error', (err) => {
        if (fs.existsSync(filepath)) {
          fs.unlink(filepath, () => {}) // Remove arquivo parcial
        }
        reject(err)
      })
    }

    downloadFromUrl(url)
  })
}

async function cleanImagesFolder(folder) {
  let promises = []

  fs.readdirSync(folder, (err, files) => {
    if (err) {
      console.error('❌ Erro ao ler diretório de imagens:', err)
      return
    }

    files.forEach(file => {
      promises.push(new Promise((resolve, _reject) => {
        const filepath = path.join(folder, file)

        fs.unlink(filepath, (err) => {
          if (err) {
            console.error('❌ Erro ao remover imagem:', err)
          } else {
            console.log(`Removida imagem: ${file}`)
            resolve()
          }
        })
      }))
    })
  })

  await Promise.all(promises)
}

async function main() {
  try {
    console.log('🚀 Iniciando importação de posts do Medium via rss2json...\n')

    const posts = await importFromRSS()

    if (posts.length === 0) {
      console.log('⚠️ Nenhum post encontrado no RSS feed')
      console.log('💡 Isso pode acontecer se:')
      console.log('   - O feed RSS está vazio')
      console.log('   - Há problemas de conectividade')
      console.log('   - O username do Medium está incorreto')
      return
    }

    console.log('\n📝 Processando e salvando posts...')

    await cleanImagesFolder(IMAGES_DIR)

    let savedCount = 0
    for (const post of posts) {
      try {
        savePost(post)
        savedCount++
      } catch (saveError) {
        console.warn(`⚠️ Erro ao salvar ${post.title}:`, saveError.message)
      }
    }

    console.log('\n🎉 Import concluído!')
    console.log('� Estatísticas:')
    console.log(`   Posts encontrados: ${posts.length}`)
    console.log(`   Posts salvos: ${savedCount}`)
    console.log(`�📂 Posts salvos em: ${POSTS_DIR}`)
    console.log(`🖼️ Imagens em: ${IMAGES_DIR}`)

    console.log('\n📋 Próximos passos:')
    console.log('1. Revisar posts importados')
    console.log('2. Executar build do Next.js')
    console.log('3. Testar as páginas do blog')
    console.log('4. Gerar sitemap atualizado: npm run generate:sitemap')

  } catch (error) {
    console.error('❌ Erro durante importação:', error.message)
    console.error('Stack trace:', error.stack)
    process.exit(1)
  }
}

// Executa se chamado diretamente
if (require.main === module) {
  main()
}

module.exports = { importFromRSS }
