import App from 'next/app'
import Router from 'next/router'
import { AppProvider } from '../components/AppProvider'
import { PageTransition } from 'next-page-transitions'
// import { useRouter } from 'next/router'
//  key={router.route}

const TIMEOUT = 400

// https://github.com/zeit/next.js/blob/canary/examples/with-next-page-transitions/pages/_app.js
// https://stackoverflow.com/questions/53857063/changing-state-on-route-change-next-js?answertab=active#tab-top
// https://jscomplete.com/learn/react-beyond-basics/react-cfp

// Interessante essa transição
// https://page-transitions-app-next.now.sh/

class MyApp extends App {
    constructor(props){
        super(props);
      
        Router.events.on('routeChangeComplete', (url) => {
            const classList = document.body.classList
            const menuOpen = 'menu-open'
          
            if([...classList].indexOf(menuOpen) !== -1) {
                classList.remove(menuOpen)
            }
        });
    }
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    // loadingComponent={<Loader />}
    /* transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms; */
    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <PageTransition
                    timeout={TIMEOUT}
                    classNames='page-transition'
                    loadingDelay={500}
                    loadingTimeout={{
                    enter: TIMEOUT,
                    exit: 0
                }}
                    loadingClassNames='loading-indicator'
                >
                    <AppProvider>
                        <Component {...pageProps} />
                    </AppProvider>
                </PageTransition>
            </>
        )
    }
}

export default MyApp