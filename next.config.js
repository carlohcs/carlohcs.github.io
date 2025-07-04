const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const webpack = require('webpack')
const { getAllPosts } = require('./components/helpers/blog-utils')

// https://github.com/giuseppeg/styled-jsx-plugin-postcss
// https://github.com/zeit/styled-jsx/issues/560#issuecomment-493112657
// https://github.com/zeit/next.js#built-in-css-support

// https://github.com/cyrilwanner/next-compose-plugins
const nextConfig = {
  webpack: (config, _options) => {
    // Adiciona regra para arquivos .ico - não processa, apenas copia
    config.module.rules.push({
      test: /\.ico$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/static/',
          outputPath: 'static/',
          name: '[path][name].[ext]'
        }
      }
    })

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BUILD_TIME_POSTS': JSON.stringify(getAllPosts()),
        'process.env.BUILD_TIME_LANGS': JSON.stringify(['pt-br', 'en']),
        'process.env.BUILD_TIME_LANG': JSON.stringify('en'),
        'process.env.BUILD_TIME_THEME': JSON.stringify('light')
      })
    )

    return config
  },

  // Gera o mapa de rotas para exportação estática
  exportPathMap: async function () {
    const paths = {}

    // Páginas estáticas básicas
    paths['/'] = { page: '/' }
    paths['/skills'] = { page: '/skills' }
    paths['/resume'] = { page: '/resume' }
    paths['/blog'] = { page: '/blog' }

    // Adiciona posts do blog de forma segura
    try {
      const posts = getAllPosts()

      if (Array.isArray(posts)) {
        posts.forEach((post) => {
          if (post && post.slug) {
            paths[`/blog/${post.slug}`] = {
              page: '/blog/[slug]',
              query: { slug: post.slug }
            }
          }
        })
      }
    } catch (error) {
      console.warn('Erro ao carregar posts para exportPathMap:', error.message)
    }

    console.log('Paths gerados:', Object.keys(paths))
    return paths
  },

  // Configuração para export estático
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = withPlugins([
  [optimizedImages, {
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    svgo: {
      plugins: [
        { removeViewBox: false },
        { removeDimensions: true }
      ]
    },
    optipng: {
      optimizationLevel: 4 // the default is 3, but 4 is better for production
    }
  }],
  [withCSS, {
    cssModules: false, // Para permitir CSS global
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    }
  }]
], nextConfig)
