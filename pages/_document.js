import Document, { Head, Html, Main, NextScript } from 'next/document'

import { DEFAULT_LANG } from '../components/helpers/constants'

// https://github.com/zeit/next.js#custom-document

class MyDocument extends Document {
  static async getInitialProps(ctx) {

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={DEFAULT_LANG}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
