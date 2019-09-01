const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

// https://github.com/giuseppeg/styled-jsx-plugin-postcss
// https://github.com/zeit/styled-jsx/issues/560#issuecomment-493112657
// https://github.com/zeit/next.js#built-in-css-support

// https://github.com/cyrilwanner/next-compose-plugins
const nextConfig = {
    webpack: (config, options) => {

        // modify the `config` here

        return config;
    },
}

module.exports = withPlugins([
    [optimizedImages, {
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        svgo: {

        },
        optipng: {
            optimizationLevel: 3,
        },
    }],
    [withCSS, {
        plugins: {
            'postcss-css-nested': {}
        }
    }]
], nextConfig)