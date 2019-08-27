
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
      }

      body.dark-ui {
        background: #1e1e1e;
        color: #fff;
      }
    `}</style>
    {props.children}
  </div>
);

export default Main;