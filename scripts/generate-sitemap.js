#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const { getAllPosts } = require('../components/helpers/blog-utils')

const SITE_URL = 'https://carlohcs.me'
const SITEMAP_PATH = path.join(__dirname, '../sitemap.xml')

function generateSitemap() {
  console.log('🗺️ Gerando sitemap.xml...')

  const staticPages = [
    {
      url: '/',
      lastmod: '2025-07-01',
      changefreq: 'monthly',
      priority: '1.0'
    },
    {
      url: '/engineer',
      lastmod: '2025-07-01',
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: '/skills',
      lastmod: '2025-07-01',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/resume',
      lastmod: '2025-07-01',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/blog',
      lastmod: '2025-07-01',
      changefreq: 'weekly',
      priority: '0.9'
    }
  ]

  const posts = getAllPosts()
  console.log(`📝 Encontrados ${posts.length} posts para incluir no sitemap`)

  // Páginas dos posts
  const blogPages = posts.map(post => ({
    url: `/blog/${post.slug}`,
    lastmod: post.date,
    changefreq: 'monthly',
    priority: '0.7'
  }))

  const allPages = [...staticPages, ...blogPages]

  const xml = generateSitemapXML(allPages)

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8')
  console.log(`✅ Sitemap gerado com ${allPages.length} URLs`)
  console.log(`📁 Salvo em: ${SITEMAP_PATH}`)

  return SITEMAP_PATH
}

function generateSitemapXML(pages) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`

  const footer = `
</urlset>`

  const urls = pages.map(page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')

  return header + urls + footer
}

function main() {
  try {
    generateSitemap()
    console.log('\n🎉 Sitemap gerado com sucesso!')
  } catch (error) {
    console.error('❌ Erro ao gerar sitemap:', error.message)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = { generateSitemap }
