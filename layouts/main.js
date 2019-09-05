import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import 'normalize.css'
import Footer from '../components/Footer';
import { AppConsumer, THEMES, LANGS,  } from '../components/AppProvider'

// https://nextjs.org/learn/basics/using-shared-components/the-layout-component

// Fonts vs SVG: https://fontawesome.com/how-to-use/on-the-web/other-topics/performance

// TODO: Resolver
// Warning: Main defines an invalid contextType. contextType should point to the Context object returned by React.createContext(). Did you accidentally pass the Context.Consumer instead?
// O modo utilizado agora não é eficiente, pois o usuário consegue ver o tema sendo mudado em tempo de abertura da página
class Main extends Component {
  componentDidMount() {
    const storage = require('../components/helpers/storage').default
    const savedTheme = storage.getTheme()
    
    // debugger
    if(savedTheme !== '' && savedTheme !== this.context.getTheme()) {
      this.context.toggleTheme(savedTheme === this.context.themes.DARK)
    }
  }

  render() {
    return (
      <div className="app">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,500&display=swap" rel="stylesheet"></link>
        </Head>
        <style jsx global>{`
          html, body, #__next, .app {
            height: 100%;
          }
            
          body { 
            background: #fff;
            color: #1e1e1e;

            font-family: 'Rubik', sans-serif;
            font-weight: 300;
            line-height: 1.5;

            /* Tema dark */
            &.dark-ui {
              background: #1e1e1e;
              color: #e1e1e1;

              a {
                color: #e1e1e1;
              }

              &:not(.menu-open) .trigger-menu-button {
                border-top-color: #e1e1e1;
              }

              .trigger-menu-button {
                &:before,
                &:after {
                    background: #e1e1e1;
                }
              }

              .toggle-language {
                &__option {
                    &:nth-of-type(1) {
                        &:after {
                            background: #e1e1e1;
                        }
                    }
                }
              }
            }

            /* Menu aberto */
            &.menu-open {
              /*
              overflow: hidden; // Pensar em um jeito melhor
              */

              .trigger-menu-button {
                border-color:transparent;
      
                &:before,
                &:after {
                  width: 33px;
                  left: -2px;
                }
      
                &:before {
                  transform: rotate(45deg);
                }
          
                &:after {
                  transform: rotate(135deg);
                  top: 9px;
                }
              }

              .nav li {
                width: 200px;
                margin-left: 0;
              }
      
              .main-content {
                /* transform: scale(0.80) translateY(-5%); */
                margin-left: 220px;
                background-color: rgba(29, 199, 121, .12);
                filter: blur(5px);
              }
      
              footer {
                display: none;
              }
            }
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

          .container {
            padding: 0 20px;

            @media screen and (min-width: 1280px) {
              padding: 60px;
            }
          }

          h2 {
            font-size: 1.2em;
          }

          @media screen and (min-width: 768px) {
            h1 {
              font-size: 4.5em;
              font-weight: 500;
              margin-bottom: 0;
            }

            h2 {
              font-size: 2.2em;
            }

            a {
              padding: 2px 2px 0;
            }
          }

          .main-content {
            /* #1DC779; */
            display: flex;
            flex-flow: column;
            position:relative;
            padding-top: 20px;
            padding-bottom: 20px;
            width:100%;
            min-height: calc(100vh - 50px);
            z-index:20;
            visibility:visible;
            transition: all 0.6s ease-in;
            box-sizing: border-box;
            
            > h1 {
              margin-top: 0;
            }

            /* height:100%; */
            /* width:100%; Promove rolagem */
            /* transition: scale 0.6s ease-in, margin-left 0.6s ease-in, background-color 0.6s ease-in; */

            @media screen and (min-width: 1280px) {
              min-height: calc(100vh - 150px); /* Tamanho da tela - Header */
            }
            
          }

          /* https://github.com/zeit/next.js/issues/7945 */
          #__next-prerender-indicator {
            display: none;
          }

          .icon {
            width: 24px;
            height: 24px;
          }

          .flex {
            display: flex;
            flex-flow: column;

            &--justify-center {
              justify-content: center;
            }

            &--justify-start {
              justify-content: flex-start;
            }
          }

          /*.app {
            overflow: hidden !important;
          }*/
        `}</style>
        <Header />
        <Menu />
        <div className="main-content container">
          {this.props.children}
          <Footer />
        </div>
      </div>
    )
  }
}

// https://stackoverflow.com/questions/49809884/access-react-context-outside-of-render-function?answertab=votes#tab-top
// https://reactjs.org/docs/hooks-reference.html#usecontext
Main.contextType = AppConsumer

export default Main