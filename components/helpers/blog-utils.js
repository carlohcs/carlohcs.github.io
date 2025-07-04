const fs = require('fs')
const path = require('path')

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content/blog')

const parseFrontmatter = (content) => {
  if (!content || typeof content !== 'string') {
    return { data: {}, content: '' }
  }

  const fmRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(fmRegex)

  if (!match) {
    return { data: {}, content }
  }

  const frontmatter = match[1] || ''
  const body = match[2] || ''

  const data = {}
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '')
      data[key] = value
    }
  })

  return { data, content: body }
}

const calculateReadTime = (content) => {
  if (!content || typeof content !== 'string') {
    return '1 min'
  }

  const wordsPerMinute = 200
  const textContent = content.replace(/<[^>]*>/g, '')
  const wordCount = textContent.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)

  return `${readTime} min`
}

const getAllPosts = () => {
  // Só executa no servidor
  if (typeof window !== 'undefined') {
    return []
  }

  try {
    // Verifica se fs existe e se o diretório existe
    if (!fs || !fs.existsSync || !fs.existsSync(BLOG_CONTENT_DIR)) {
      console.warn('Diretório de blog não encontrado:', BLOG_CONTENT_DIR)
      return []
    }

    const files = fs.readdirSync(BLOG_CONTENT_DIR)
      .filter(file => file && file.endsWith('.md'))
      .sort((a, b) => b.localeCompare(a))

    const posts = files.map(filename => {
      try {
        const filePath = path.join(BLOG_CONTENT_DIR, filename)
        const content = fs.readFileSync(filePath, 'utf8')
        const { data, content: body } = parseFrontmatter(content)

        // Extrai slug do nome do arquivo se não tiver no frontmatter
        let slug = data.slug

        if (!slug) {
          slug = filename
            .replace(/^\d{4}-\d{2}-\d{2}-/, '') // Remove data do início
            .replace(/\.md$/, '') // Remove extensão
            .replace(/%[0-9A-F]{2}/g, '') // Remove encoding de URL
            .replace(/[^a-z0-9]+/gi, '-') // Substitui caracteres especiais por hífen
            .replace(/(^-|-$)/g, '') // Remove hífens do início/fim
        }

        return {
          slug,
          title: data.title || 'Post sem título',
          date: data.date || filename.slice(0, 10),
          excerpt: data.excerpt || (body ? body.replace(/<[^>]*>/g, '').substring(0, 200) + '...' : ''),
          content: body || '',
          source: data.source || 'medium',
          originalUrl: data.originalUrl || '',
          readTime: calculateReadTime(body),
          filename
        }
      } catch (fileError) {
        console.warn(`Erro ao processar arquivo ${filename}:`, fileError.message)
        return null
      }
    }).filter(post => post !== null) // Remove posts que falharam

    return posts
  } catch (error) {
    console.error('Erro ao carregar posts:', error)
    return []
  }
}

const getPostBySlug = (slug) => {
  if (!slug) return null

  const posts = getAllPosts()

  // Tenta várias formas de comparação para garantir compatibilidade
  const searchSlugs = [
    slug,                           // Slug original
    decodeURIComponent(slug),       // Slug decodificado
    encodeURIComponent(slug)        // Slug encodado
  ]

  for (const searchSlug of searchSlugs) {
    const post = posts.find(post =>
      post && post.slug && (
        post.slug === searchSlug ||
        decodeURIComponent(post.slug) === searchSlug ||
        encodeURIComponent(post.slug) === searchSlug
      )
    )
    if (post) return post
  }

  return null
}

const getPostsWithPagination = (page = 1, limit = 10) => {
  const allPosts = getAllPosts()
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return {
    posts: allPosts.slice(startIndex, endIndex),
    totalPosts: allPosts.length,
    totalPages: Math.ceil(allPosts.length / limit),
    currentPage: page,
    hasNext: endIndex < allPosts.length,
    hasPrev: page > 1
  }
}

const searchPosts = (query) => {
  if (!query) return getAllPosts()

  const posts = getAllPosts()
  const searchTerm = query.toLowerCase()

  return posts.filter(post =>
    post && (
      (post.title && post.title.toLowerCase().includes(searchTerm)) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm)) ||
      (post.content && post.content.toLowerCase().includes(searchTerm))
    )
  )
}

const getPostImage = (post) => {
  if (!post || !post.content || typeof post.content !== 'string') {
    return null
  }

  // Procura pela primeira imagem no conteúdo
  const imageMatch = post.content.match(/src="([^"]*?)"/)

  return imageMatch ? imageMatch[1] : null
}

module.exports = {
  parseFrontmatter,
  calculateReadTime,
  getAllPosts,
  getPostBySlug,
  getPostsWithPagination,
  searchPosts,
  getPostImage
}
