import { Component } from 'react'

const TIMEOUT = 400

class GlobalStyle extends Component {
  render() {
    return (
      <style jsx global>{`
          html, body, #__next, .app {
            /*height: 100%;*/
            min-height: 100vh;
          }

          /* https://gist.github.com/oskarhane/615d28c6455081035d2ec83311fa3b2d#file-global-css */
          html {
            content: "";

            &.overflow--hidden {
                overflow: hidden;

                body, .app {
                  overflow: hidden;

                  @media (max-width: 1024px) {
                    overflow: hidden;
                  }
              }
            }
          }

          @media (prefers-color-scheme: light) {
            html {
                content: "light";
            }
          }

          @media (prefers-color-scheme: dark) {
            html {
                content: "dark";
            }
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
              /* overflow-x: hidden; */ /* Pensar em um jeito melhor */

              .main-content {
                &:after {
                  z-index: 3;
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  display: block;
                }
              }

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
      
              /*footer {
                display: none;
              }*/
            }
          }

          a:not(.no-link-style) {
            color: #1e1e1e;
            text-decoration: none;
            position: relative;
            display: inline-block;
            vertical-align: middle;
            border-bottom: 2px solid rgba(29, 199, 121, 0.65);
            transition: color 500ms cubic-bezier(0.47, 0.99, 1, 0.99), transform 0.3s ease-in-out;
            outline: none;

            &:hover,
            &:active,
            &:focus {
              color: #fff;
              /* transform: scale(1.1); */
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
              transition: width 500ms cubic-bezier(0.47, 0.99, 1, 0.99);
            }

            &:hover:before,
            &:active:before,
            &:focus:before {
              width: 100%;
            }
          }

          a {
            outline: none;

            &.link {
              &--zoom {
                transition: transform 500ms cubic-bezier(0.47, 0.99, 1, 0.99);
                &:hover,
                &:active,
                &:focus {
                  transform: scale(1.3);
                }
              }
            }
          }

          .container {
            /*margin: 0 auto;*/

            &--center {
              margin: 0 auto;
            }

            /* https://ricostacruz.com/til/css-media-query-breakpoints */
            /*@media (min-width:576px){
              max-width:540px;
            }*/
            
            /*@media (min-width:768px){
              max-width:720px;
            }*/

            @media (min-width:992px){
              max-width:960px;
            }
          
            @media (min-width:1200px){
              max-width:1140px;
            }

            @media (min-width:1440px){
              max-width:1348px;
            }

            @media (min-width:1680px){
              max-width:1556px;
            }
          }


          .page {
            &__description {
              max-width: 600px;
              display: inline-block;

              @media (min-width: 1200px) {
                max-width: 700px;
              }
            }

            &__item {
                margin: 80px 0;
            }
          }

          .content {
            text-align: center;
            /*max-width: 750px;*/

            
            @media (min-width: 1024px) and (min-height: 768px) {
              text-align: left;
            }

            /*
            @media (min-width: 1024px) {
                display: flex;
                flex-direction: row;
                width: 100%;

                p {
                    font-size: 1.4em;
                    font-weight: 300;
                    line-height: 1.4;
                }

                &__welcome {
                    max-width: 550px;
                }
            }

            @media (min-width: 1440px) {
                p {
                    font-size: 1.6em;
                    font-weight: 300;
                    line-height: 1.4;
                }
            }*/
          }


          /*&__welcome {
            max-width: 600px;
          }*/

          .column {
            width: 50%;
            
            &:nth-of-type(1) {
              padding-right: 20px;

              @media screen and (min-width: 1280px) {
                padding-right: 60px;
              }
            }

            &:nth-of-type(2) {
              padding-left: 20px;

              @media screen and (min-width: 1280px) {
                padding-left: 60px;
              }
            }
          }

          h2 {
            font-size: 1.2em;
          }

          @media screen and (min-width: 768px) {
            h1 {
              font-size: 4.5em;
              font-weight: 500;
              margin: 0;
            }

            h2 {
              font-size: 2.2em;
              margin-top: 0;
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
            width:100%;
            min-height: calc(100vh - 120px);
            justify-content: flex-start;
            z-index:20;
            visibility:visible;
            transition: all 0.6s ease-in;
            box-sizing: border-box;
            padding: 0 20px 20px;
            /*justify-content: center;*/
            will-change: margin-left;

            @media screen and (min-width: 1024px) {
              padding: 40px;
            }

            @media screen and (min-width: 1280px) {
              padding: 80px;
            }

            @media screen and (min-width: 1440px) {
              padding: 80px 120px;
            }
            
            > h1 {
              margin-top: 0;
            }

            /* height:100%; */
            /* width:100%; Promove rolagem */
            /* transition: scale 0.6s ease-in, margin-left 0.6s ease-in, background-color 0.6s ease-in; */

             /* Tamanho da tela - Header */
            /*@media screen and (min-width: 1280px) {
              min-height: calc(100vh - 150px);
            }*/
            
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

        /* ==== TRANSIÇÃO DE PÁGINAS ==== */
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }



        /* ==== PROJETOS ==== */
        .project:not(.project--main) {
          .project__title {
              @media (min-width: 1280px) {
                  margin-top: -40px !important;
              }

              @media (min-width: 1440px) {
                  margin-top: -60px !important;
              }
          }

          &:nth-child(odd) {
              .project__cover {
                  @media (min-width: 1280px) {
                      box-shadow: -25px 30px 60px 5px rgba(0, 0, 0, .3);
                  }
              }
          }

          &:nth-child(even) {
              .project__cover {
                  @media (min-width: 1280px) {
                      box-shadow: 25px 30px 60px 5px rgba(0, 0, 0, .3);
                  }
              }
          }
      }
      
      .dark-ui {
          .project {
              &__cover {
                  box-shadow: none;
              }
          }
      }
      
      .project {
          margin: 80px 0;

          @media screen and (min-width: 1024px) {
              margin: 100px 0;
          }

          @media screen and (min-width: 1280px) {
              margin: 200px 0;
          }

          &--no-shadow {
            .project__cover {
              box-shadow: none !important;
            }
          }

          &--reduced-margin {
            @media screen and (min-width: 1024px) {
              margin: 100px 0;
            }

            @media screen and (min-width: 1280px) {
                margin: 100px 0;
            } 
          }

          &__cover {
              max-width: 100%;
              margin: 0 auto 20px;   
              box-shadow: 0 15px 20px 5px rgba(68, 68, 68, .3);
          }

          &__description {
              max-width: 650px;
              margin-top: 10px;

              @media screen and (min-width: 1024px) {
                  margin-top: 20px;
              }

              p {
                  margin: 0;
              }
          }

          &--main {
              .project__cover {
                  @media screen and (min-width: 1024px) {
                      max-width: 1200px;
                      margin: 0 auto 60px;
                      display: block;
                  }
              }
                  

              .project__content{
                  flex-flow: column !important;

                  &__column {
                      &:nth-of-type(1) {
                          width: 100% !important;
                      }
                      &:nth-of-type(2) {
                          width: auto !important;
                      }
                  }
              }
          }

          .project__content {
              display: flex;
              flex-flow: column;
              align-items: center;
              justify-content: center;

              &__column {
                  @media screen and (min-width: 1024px) {
                      width: 50%;
                  }
              }
          }

          @media screen and (min-width: 1024px) {
              .project__content {
                  flex-flow: row;
              }

              &:not(.project--main):nth-child(even) {
                  .project__content {
                      flex-direction: row-reverse;

                      &__column {
                          @media screen and (min-width: 1024px) {
                              &:nth-of-type(1) {
                                  padding-left: 20px;
                              }

                              &:nth-of-type(2) {
                                  padding-right: 20px;
                              }
                          }

                          @media screen and (min-width: 1280px) {
                              &:nth-of-type(1) {
                                  padding-left: 40px;
                              }

                              &:nth-of-type(2) {
                                  padding-right: 40px;
                              }
                          }
                      }
                  }
              }

              &:not(.project--main):nth-child(odd) {
                  .project__content {
                      &__column {
                          @media screen and (min-width: 1024px) {
                              &:nth-of-type(1) {
                                  padding-right: 20px;
                              }

                              &:nth-of-type(2) {
                                  padding-left: 20px;
                              }
                          }

                          @media screen and (min-width: 1280px) {
                              &:nth-of-type(1) {
                                  padding-right: 40px;
                              }

                              &:nth-of-type(2) {
                                  padding-left: 40px;
                              }
                          }
                      }
                  }
              }
          }

          &:last-child {
              margin-bottom: 0;
          }
          
          &__title {
              margin: 0;
          }

          &__technology {
              font-size: 12px;
              margin-bottom: 0;

              @media screen and (min-width: 1024px) {
                  font-size: 16px;
                  margin-top: 20px !important;
              }
          }
      }
        `}</style>
    )
  }
}

export default GlobalStyle
