module.exports = {
  plugins: [
    'postcss-nested',
    [
      'postcss-preset-env'
      // Without any configuration options, PostCSS Preset Env enables Stage 2 features and supports all browsers.
      // https://www.npmjs.com/package/postcss-preset-env
    ]
  ]
}
