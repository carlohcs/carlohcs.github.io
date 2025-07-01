const fs = require('fs')
const path = require('path')

const staticDir = path.join(__dirname, '..', 'static')
const docsDir = path.join(__dirname, '..', 'docs')

// Files to copy from static/ to docs/ root
const filesToCopy = [
  'sitemap.xml',
  'robots.txt',
  'manifest.json'
]

console.log('📁 Copying static files to docs root...')

filesToCopy.forEach(file => {
  const srcPath = path.join(staticDir, file)
  const destPath = path.join(docsDir, file)

  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath)
      console.log(`✅ Copied ${file} to docs root`)
    } else {
      console.log(`⚠️  ${file} not found in static folder`)
    }
  } catch (error) {
    console.error(`❌ Error copying ${file}:`, error.message)
  }
})

console.log('🎉 Static files copy completed!')
