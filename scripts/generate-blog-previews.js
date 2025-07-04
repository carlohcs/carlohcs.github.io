const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { getAllPosts, getPostImage } = require('../components/helpers/blog-utils')

// Configurações
const BASE_IMAGE_PATH = path.join(__dirname, '..', 'static', 'img', 'meta', 'blog-post.png')
const OUTPUT_DIR = path.join(__dirname, '..', 'static', 'img', 'blog', 'meta')
const BLOG_IMAGES_DIR = path.join(__dirname, '..', 'static', 'img', 'blog')

// Configurações de design
const CANVAS_WIDTH = 1200
const CANVAS_HEIGHT = 630
const OVERLAY_HEIGHT = 260
const OVERLAY_MARGIN = 15  // Margens de 15px para top, left e right
const OVERLAY_SIDE_MARGIN = 63  // Margem lateral específica para o overlay
const TEXT_PADDING = 30
const FONT_SIZE = 48 // Tamanho da fonte para o título

console.log('🎨 Iniciando geração de previews do blog...')

async function createPreviewImage(post) {
  try {
    console.log(`📝 Processando: ${post.title}`)

    // 1. Carrega imagem base
    let baseImage = sharp(BASE_IMAGE_PATH)
      .resize(CANVAS_WIDTH, CANVAS_HEIGHT, { fit: 'cover' })

    // 2. Obtém imagem do post
    const postImageSrc = getPostImage(post)
    let postImageBuffer = null

    if (postImageSrc) {
      const postImagePath = path.join(BLOG_IMAGES_DIR, path.basename(postImageSrc))

      if (fs.existsSync(postImagePath)) {
        console.log(`  🖼️  Usando imagem: ${path.basename(postImagePath)}`)

        // Redimensiona para 1170x520px e adiciona transparência à imagem do post
        postImageBuffer = await sharp(postImagePath)
          .resize(1170, 520, { fit: 'cover' })
          .composite([{
            input: Buffer.from([255, 255, 255, 128]), // Branco com 50% transparência
            raw: { width: 1, height: 1, channels: 4 },
            tile: true,
            blend: 'multiply'
          }])
          .png()
          .toBuffer()
      }
    }

    // 3. Cria overlay com texto
    const overlayY = 164 // 164px do topo
    const overlayWidth = CANVAS_WIDTH - (OVERLAY_SIDE_MARGIN * 2)
    const textWidth = overlayWidth - (TEXT_PADDING * 2)

    // Quebra o título em múltiplas linhas se necessário
    const titleLines = wrapText(post.title, textWidth, FONT_SIZE)

    titleLines.push(
      `${formatDate(post.date)} • ${post.readTime}`
    )

    // SVG para o overlay de texto
    const textSvg = `
      <svg width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}">
        <!-- Fundo do overlay -->
        <rect 
          x="${OVERLAY_SIDE_MARGIN}" 
          y="${overlayY}" 
          width="${overlayWidth}" 
          height="${OVERLAY_HEIGHT}" 
          fill="#1e1e1e" 
          opacity="0.9" 
        />

        <!-- Título do post (múltiplas linhas) -->
        ${titleLines.map((line, index) => `
        <text 
          x="${CANVAS_WIDTH / 2}" 
          y="${overlayY + 60 + (index * 50)}"
          font-family="Rubik, Arial, sans-serif" 
          font-size="${index === titleLines.length - 1 ? 28 : FONT_SIZE}" 
          font-weight="500" 
          fill="#ffffff"
          text-anchor="middle"
        >
          ${escapeXml(line)}
        </text>`).join('')}
      </svg>
    `

    // 4. Composição final
    const compositeOptions = [
      {
        input: Buffer.from(textSvg),
        top: 0,
        left: 0
      }
    ]

    // Adiciona imagem do post se existir (com 15px de margem)
    if (postImageBuffer) {
      compositeOptions.unshift({
        input: postImageBuffer,
        top: OVERLAY_MARGIN,
        left: OVERLAY_MARGIN
      })
    }

    // 5. Gera imagem final
    const outputPath = path.join(OUTPUT_DIR, `${post.slug}.png`)

    await baseImage
      .composite(compositeOptions)
      .png({ quality: 70 })
      .toFile(outputPath)

    console.log(`  ✅ Preview gerado: ${path.basename(outputPath)}`)
    return outputPath

  } catch (error) {
    console.error(`  ❌ Erro ao processar ${post.title}:`, error.message)
    return null
  }
}

function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatDate(dateString) {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch {
    return dateString
  }
}

function wrapText(text, maxWidth, fontSize) {
  // Estimativa aproximada: 1 caractere = fontSize * 0.6 pixels
  const avgCharWidth = fontSize * 0.6
  const maxCharsPerLine = Math.floor(maxWidth / avgCharWidth)

  if (text.length <= maxCharsPerLine) {
    return [text]
  }

  const words = text.split(' ')
  const lines = []
  let currentLine = ''

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word

    if (testLine.length <= maxCharsPerLine) {
      currentLine = testLine
    } else {
      if (currentLine) {
        lines.push(currentLine)
        currentLine = word
      } else {
        // Palavra muito longa, força quebra
        lines.push(word)
      }
    }
  }

  if (currentLine) {
    lines.push(currentLine)
  }

  // Limita a 3 linhas para não ultrapassar o overlay
  return lines.slice(0, 3).map(line =>
    line.length > maxCharsPerLine ? line.substring(0, maxCharsPerLine - 3) + '...' : line
  )
}

async function generateAllPreviews() {
  try {
    // Cria diretório de output se não existir
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true })
      console.log(`📁 Diretório criado: ${OUTPUT_DIR}`)
    }

    // Verifica se sharp está instalado
    try {
      await sharp(BASE_IMAGE_PATH).metadata()
    } catch (error) {
      console.error('❌ Sharp não está instalado. Execute: npm install sharp')
      process.exit(1)
    }

    // Obtém todos os posts
    const posts = getAllPosts()
    console.log(`📚 Encontrados ${posts.length} posts`)

    if (posts.length === 0) {
      console.log('⚠️  Nenhum post encontrado')
      return
    }

    // Gera preview para cada post
    let successCount = 0
    for (const post of posts) {
      const result = await createPreviewImage(post)
      if (result) successCount++
    }

    console.log('🎉 Processo concluído!')
    console.log(`✅ ${successCount}/${posts.length} previews gerados com sucesso`)
    console.log(`📂 Arquivos salvos em: ${OUTPUT_DIR}`)

  } catch (error) {
    console.error('❌ Erro geral:', error)
    process.exit(1)
  }
}

// Executa se chamado diretamente
if (require.main === module) {
  generateAllPreviews()
}

module.exports = {
  generateAllPreviews,
  createPreviewImage
}
