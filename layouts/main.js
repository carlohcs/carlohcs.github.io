
import Head from 'next/head';
import 'normalize.css';

// https://nextjs.org/learn/basics/using-shared-components/the-layout-component

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

      a {
        color: #1e1e1e;
        text-decoration: none;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        border-bottom: 2px solid rgba(29, 199, 121, 0.65);
        transition: color 300ms cubic-bezier(0.47, 0.99, 1, 0.99), transform 0.3s ease-in-out;
      }

      a:hover {
        color: #fff;
        transform: scale(1.1);
      }

      a:before {
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

      a:hover:before {
        width: 100%;
      }

      @media screen and (min-width: 768px) {
        a {
          padding: 2px 2px 0;
        }
      }

      body.dark-ui a {
        color: #e1e1e1;
      }

      .container {
        padding: 0 20px;
      }
    `}</style>
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Main;