const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

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

    return config
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
