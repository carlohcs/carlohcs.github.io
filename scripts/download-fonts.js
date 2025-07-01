const https = require('https')
const fs = require('fs')
const path = require('path')

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap&subset=latin,latin-ext'
const FONTS_DIR = path.join(__dirname, '../static/fonts')
const CSS_FILE = path.join(FONTS_DIR, 'rubik.css')

if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true })
}

console.log('📥 Baixando definições CSS das fontes (PT-BR + EN apenas)...')

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}

https.get(FONT_URL, options, (res) => {
  let css = ''

  res.on('data', (chunk) => {
    css += chunk
  })

  res.on('end', () => {
    console.log('✅ CSS baixado com sucesso')

    // Filtrar apenas fontes Latin e Latin-Extended
    const fontBlocks = css.split('@font-face')
    const filteredBlocks = []

    fontBlocks.forEach((block, index) => {
      if (index === 0) return // Skip primeiro bloco vazio

      const isLatin = block.includes('/* latin ') || block.includes('/* latin-ext ')
      if (isLatin) {
        filteredBlocks.push('@font-face' + block)
      }
    })

    // Extrair URLs das fontes filtradas
    const filteredCSS = filteredBlocks.join('')
    const fontUrls = filteredCSS.match(/https:\/\/fonts\.gstatic\.com\/[^)]+/g) || []
    console.log(`📋 Encontradas ${fontUrls.length} fontes para baixar (apenas PT-BR + EN)`)

    let downloadedCount = 0
    let modifiedCSS = filteredCSS

    // Mapear URLs para nomes de arquivos mais organizados
    const fileMapping = {
      0: 'rubik-10.woff2', // latin-ext 300
      1: 'rubik-5.woff2',  // latin 300
      2: 'rubik-4.woff2',  // latin-ext 500
      3: 'rubik-11.woff2'  // latin 500
    }

    fontUrls.forEach((url, index) => {
      const fileName = fileMapping[index] || `rubik-${index}.woff2`
      const localPath = `/static/fonts/${fileName}`
      const filePath = path.join(FONTS_DIR, fileName)

      console.log(`⬇️  Baixando: ${url}`)

      https.get(url, (fontRes) => {
        const chunks = []

        fontRes.on('data', (chunk) => {
          chunks.push(chunk)
        })

        fontRes.on('end', () => {
          const buffer = Buffer.concat(chunks)
          fs.writeFileSync(filePath, buffer)

          // Substituir URL no CSS
          modifiedCSS = modifiedCSS.replace(url, localPath)

          downloadedCount++
          console.log(`✅ ${fileName} baixado (${downloadedCount}/${fontUrls.length})`)

          // Se todas as fontes foram baixadas, salvar CSS
          if (downloadedCount === fontUrls.length) {
            fs.writeFileSync(CSS_FILE, modifiedCSS)
            console.log(`🎉 Todas as fontes baixadas! CSS salvo em: ${CSS_FILE}`)
            console.log(`📁 Fontes salvas em: ${FONTS_DIR}`)
            console.log('\n📝 Para usar as fontes locais, atualize seu código para:')
            console.log('<link rel="stylesheet" href="/static/fonts/rubik.css" />')
          }
        })
      }).on('error', (err) => {
        console.error(`❌ Erro ao baixar ${url}:`, err.message)
      })
    })
  })
}).on('error', (err) => {
  console.error('❌ Erro ao baixar CSS:', err.message)
})
