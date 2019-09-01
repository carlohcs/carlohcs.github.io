
import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import 'normalize.css'
import Footer from '../components/Footer';

// https://nextjs.org/learn/basics/using-shared-components/the-layout-component

// Fonts vs SVG: https://fontawesome.com/how-to-use/on-the-web/other-topics/performance

const Main = props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Rubik:300,500&display=swap" rel="stylesheet"></link>
    </Head>
    <style jsx global>{`
      body { 
        background: #fff;
        color: #1e1e1e;

        font-family: 'Rubik', sans-serif;
        font-weight: 300;
        line-height: 1.5;
      }

      body.dark-ui {
        background: #1e1e1e;
        color: #e1e1e1;
      }

      a:not(.no-link-style) {
        color: #1e1e1e;
        text-decoration: none;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        border-bottom: 2px solid rgba(29, 199, 121, 0.65);
        transition: color 300ms cubic-bezier(0.47, 0.99, 1, 0.99), transform 0.3s ease-in-out;

        &:hover {
          color: #fff;
          transform: scale(1.1);
        }

        &:before {
          content: " ";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 100%;
          z-index: -1;
          background-color: #1DC779;
          transform: perspective(1px) translateZ(0);
          transition: width 600ms cubic-bezier(0.47, 0.99, 1, 0.99);
        }

        &:hover:before {
          width: 100%;
        }
      }

      body.dark-ui a {
        color: #e1e1e1;
      }

      .container {
        padding: 0 20px;
      }

      h2 {
        font-size: 1.2em;
      }

      @media screen and (min-width: 768px) {
        a {
          padding: 2px 2px 0;
        }

        h2 {
          font-size: 1.5em;
        }
      }

      .main-content {
        /* #1DC779; */
        position:relative;
        padding-top: 20px;
        padding-bottom: 20px;
        width:100%;
        /* height:100%; */
        min-height: calc(100vh - 50px - 61px);
        z-index:20;
        /* width:100%; Promove rolagem */
        visibility:visible;
        /* transition: scale 0.6s ease-in, margin-left 0.6s ease-in, background-color 0.6s ease-in; */
        transition: all 0.6s ease-in;

        > h1 {
          margin-top: 0;
        }

        box-sizing: border-box;
      }

      /* https://github.com/zeit/next.js/issues/7945 */
      #__next-prerender-indicator {
        display: none;
      }

      .icon {
        width: 24px;
        height: 24px;
      }
    `}</style>
    <div className="app">
      <Header />
      <Menu />
      <div className="main-content container">
        {props.children}
      </div>
    </div>
    <Footer />
  </div>
)

export default Main;