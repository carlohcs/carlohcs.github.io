const withCSS = require('@zeit/next-css')

// https://github.com/giuseppeg/styled-jsx-plugin-postcss
// https://github.com/zeit/styled-jsx/issues/560#issuecomment-493112657
// https://github.com/zeit/next.js#built-in-css-support

module.exports = withCSS({
    plugins: {
        'postcss-css-nested': {}
    }
})