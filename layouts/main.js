import { useContext, useEffect, useState } from 'react'
import Router, { withRouter } from 'next/router'
import Head from 'next/head'
import { Header } from '../components/header/Header'
import { Menu } from '../components/menu/Menu'
import { AppContext } from '../components/providers/AppProvider'
import { DEFAULT_LANG, THEMES, DEFAULT_THEME } from '../components/helpers/constants'
import PropTypes from 'prop-types'
import { storage } from '../components/helpers/storage'
import { Introduction } from '../components/page/Introduction'
import { findRoute } from '../components/helpers/find-route'
import { CustomHead } from '../components/custom-head/CustomHead'
import { getImageUrl } from '../components/helpers/get-image-url'

// https://nextjs.org/learn/basics/using-shared-components/the-layout-component

// Fonts vs SVG: https://fontawesome.com/how-to-use/on-the-web/other-topics/performance

const Main = withRouter(({ children, router }) => {
  const { getMessage, toggleTheme, toggleLang, resetMenuBehavior } = useContext(AppContext)
  const [loadedConfigs, setLoadedConfigs] = useState(false)
  const [translationKey, setTranslationKey] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const pageClasses = `page-component ${isTransitioning ? 'page-exit-active' : 'page-enter-active'}`

  const handleRouteChangeStart = () => {
    setIsTransitioning(true)
  }

  const handleRouteChangeComplete = () => {
    resetMenuBehavior()
    setTimeout(() => {
      setIsTransitioning(false)
    }, 100)
  }

  const handleRouteChangeError = () => {
    setIsTransitioning(false)
  }

  const handleCloseMenu = (evt) => {
    if (evt.target.getAttribute('data-close-menu')) {
      resetMenuBehavior()
    }
  }

  useEffect(() => {
    // Adicionar event listeners
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)
    Router.events.on('routeChangeError', handleRouteChangeError)

    const savedTheme = storage.getTheme() // BUG: só está salvando um item por vez
    const savedLang = storage.getLang() // BUG: só está salvando um item por vez
    const contextLang = getMessage('page', 'lang')

    // Se o usuário já possuía um tema salvo
    if (savedTheme && savedTheme !== '') {
      toggleTheme(savedTheme)
    } else {
      // Se ele possuir uma preferência de tema
      const userPreferedTheme = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('content')
        .replace(/"/g, '')

      toggleTheme(userPreferedTheme === THEMES.DARK ? THEMES.DARK : DEFAULT_THEME)
    }

    // Se houver uma língua salva anteriormente
    const definedLang = savedLang && savedLang !== '' && savedLang !== contextLang

    toggleLang(definedLang ? savedLang : DEFAULT_LANG)

    document.body.addEventListener('click', handleCloseMenu)

    const translationKey = findRoute(router.route).name

    setLoadedConfigs(true)
    setTranslationKey(translationKey)

    return () => {
      document.body.removeEventListener('click', handleCloseMenu)

      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
      Router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [])

  const mainContent = !loadedConfigs && !isTransitioning ? '' : <div className={pageClasses} data-close-menu>
    {children}
  </div>

  return (
    <div className="app">
      <Head>
        {/* ========================================= */}
        {/* 🔴 PRIORIDADE CRÍTICA - Essencial       */}
        {/* ========================================= */}

        {/* Configurações básicas do navegador */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* SEO fundamental - impacto direto no ranking */}
        <meta name="description" content={getMessage('page', 'seoDescription')} />
        <meta name="keywords" content="Carlos Henrique Carvalho de Santana, Carlos Henrique, Carlos, Henrique, Carvalho, Santana, portfólio, portfolio, software engineer, frontend developer, react, javascript" />
        <meta name="author" content="Carlos Henrique Carvalho de Santana" />

        {/* Controle de indexação - define como motores de busca veem o site */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* URL canônica - evita conteúdo duplicado (crucial para SEO) */}
        <link rel="canonical" href="https://carlohcs.me" />

        {/* Idioma do conteúdo */}
        <meta httpEquiv="Content-Language" content="pt-br, en" />

        {/* ========================================= */}
        {/* 🔴 OPEN GRAPH - Compartilhamento Social  */}
        {/* ========================================= */}

        {/* Informações básicas para Facebook, LinkedIn, WhatsApp */}
        <meta data-hid="og:site_name" name="og:site_name" property="og:site_name" content="Carlos Henrique Carvalho de Santana" />
        <meta property="og:title" content={getMessage('page', 'seoTitle')} />
        <meta property="og:description" content={getMessage('page', 'seoDescription')} />
        <meta property="og:url" content="https://carlohcs.me" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

        {/* Imagem principal para compartilhamento */}
        <meta property="og:image" content={`https://carlohcs.me${getImageUrl('home/carlohcs-xs-2.jpg')}`} />
        <meta property="og:image:alt" content={getMessage('page', 'seoAltImageTitle')} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:secure_url" content={`https://carlohcs.me${getImageUrl('home/carlohcs-xs-2.jpg')}`} />

        {/* Imagem alternativa para diferentes contextos */}
        <meta property="og:image" content={`https://carlohcs.me${getImageUrl('home/carlohcs-lg.png')}`} />

        {/* Informações específicas para artigos/portfolio */}
        <meta property="article:author" content="Carlos Henrique Carvalho de Santana" />
        <meta property="article:section" content="Portfolio" />
        <meta property="article:tag" content="Software Engineer" />
        <meta property="article:tag" content="Frontend Developer" />
        <meta property="article:tag" content="FullStack Developer" />

        {/* ========================================= */}
        {/* 🔴 TWITTER CARDS - Compartilhamento      */}
        {/* ========================================= */}

        {/* Configuração para Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@carlohcs" />
        <meta property="twitter:creator" content="@carlohcs" />
        <meta property="twitter:title" content={getMessage('page', 'seoTitle')} />
        <meta property="twitter:description" content={getMessage('page', 'seoDescription')} />
        <meta property="twitter:image" content={`https://carlohcs.me${getImageUrl('home/carlohcs-xs-2.jpg')}`} />
        <meta name="twitter:image:alt" content={getMessage('page', 'seoAltImageTitle')} />
        <meta name="twitter:domain" content="carlohcs.me" />

        {/* ========================================= */}
        {/* 🟡 PRIORIDADE ALTA - Performance         */}
        {/* ========================================= */}

        {/* DNS Prefetch - resolve DNS antes de precisar */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* ========================================= */}
        {/* 🖼️ PRELOAD/PREFETCH - Recursos Críticos */}
        {/* ========================================= */}

        {/* Preload - carrega recursos críticos imediatamente */}
        <link rel="preload" as="image" href={getImageUrl('home/carlohcs-lg.png')} />
        <link rel="preload" as="image" href={getImageUrl('home/carlohcs-xs-2.jpg')} />

        {/* Prefetch - carrega recursos quando navegador estiver livre */}
        <link rel="prefetch" as="video" href="/static/video/godaddy.webm" />
        <link rel="prefetch" as="image" href={getImageUrl('projects/godaddy.png')} />
        <link rel="prefetch" as="image" href={getImageUrl('skills/instructor.png')} />
        <link rel="prefetch" as="image" href={getImageUrl('skills/productowner.png')} />
        <link rel="prefetch" as="image" href={getImageUrl('skills/facilitator.png')} />

        {/* ========================================= */}
        {/* 🚀 FONTES - Estratégia Híbrida Local+CDN */}
        {/* ========================================= */}

        {/* 1️⃣ FONTES LOCAIS (Primeira prioridade) */}
        <link rel="stylesheet" href="/static/fonts/rubik.css" />

        {/* 2️⃣ PRELOAD das fontes críticas locais */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/static/fonts/rubik-5.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/static/fonts/rubik-11.woff2"
          crossOrigin="anonymous"
        />

        {/* 3️⃣ FALLBACK CDN (caso fontes locais falhem) */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'; this.onload=null;"
        /> */}

        {/* 4️⃣ FALLBACK para navegadores sem JavaScript - ERRO */}
        {/* <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap" />
        </noscript> */}

        {/* ========================================= */}
        {/* 🟡 FAVICONS E ÍCONES - Branding          */}
        {/* ========================================= */}

        {/* Favicons modernos - suporte cross-browser */}
        <link rel="icon" href="/static/img/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href={getImageUrl('favicon/favicon.svg')} />
        <link rel="icon" type="image/png" sizes="96x96" href={getImageUrl('favicon/favicon-96x96.png')} />
        <link rel="shortcut icon" href="/static/img/favicon/favicon.ico" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href={getImageUrl('favicon/apple-touch-icon.png')} />

        {/* PWA Icons - quando usuário adiciona à tela inicial */}
        <link rel="icon" type="image/png" sizes="192x192" href={getImageUrl('favicon/web-app-manifest-192x192.png')} />
        <link rel="icon" type="image/png" sizes="512x512" href={getImageUrl('favicon/web-app-manifest-512x512.png')} />

        {/* ========================================= */}
        {/* 🟡 PWA - Progressive Web App             */}
        {/* ========================================= */}

        {/* Configurações de tema */}
        <meta name="theme-color" content="#1e1e1e" />
        <meta name="msapplication-navbutton-color" content="#1e1e1e" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Configurações de Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Carlohcs" />
        <meta name="application-name" content="Carlohcs" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#1e1e1e" />
        <meta name="msapplication-TileImage" content={getImageUrl('favicon/web-app-manifest-192x192.png')} />

        {/* Web App Manifest */}
        <link rel="manifest" href="/static/manifest.json" />

        {/* ========================================= */}
        {/* 🟠 PRIORIDADE MÉDIA - SEO Avançado       */}
        {/* ========================================= */}

        {/* Sitemap para motores de busca */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Robots.txt para controle de crawling */}
        <link rel="robots" href="/robots.txt" />

        {/* Suporte para temas do sistema operacional */}
        <meta name="color-scheme" content="dark light" />

        {/* Acessibilidade - redução de movimento */}
        <meta name="prefers-reduced-motion" content="no-preference" />

        {/* RSS Feed para blog (quando implementar) */}
        {/* TODO: Posts que tenho no Medium, trazê-los pra cá também */}
        {/* <link rel="alternate" type="application/rss+xml" title="Carlohcs Blog" href="/feed.xml" /> */}

        {/* ========================================= */}
        {/* 🟢 PRIORIDADE BAIXA - Informações        */}
        {/* ========================================= */}

        {/* Informações de copyright e geração */}
        <meta name="copyright" content="© 2025 Carlos Henrique Carvalho de Santana" />
        <meta name="generator" content="Next.js Custom Site" />

        {/* Links de contato e perfis sociais */}
        <link rel="me" href="mailto:carlohcs@gmail.com" />
        <link rel="me" href="https://github.com/carlohcs" />

        {/* ========================================= */}
        {/* 🟢 SEGURANÇA - Proteções                 */}
        {/* ========================================= */}

        {/* Política de referrer - protege privacidade */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ========================================= */}
        {/* 🔵 STRUCTURED DATA - Rich Snippets       */}
        {/* ========================================= */}

        {/* JSON-LD para Google Rich Snippets */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Carlos Henrique Carvalho de Santana",
            "url": "https://carlohcs.me",
            "image": "https://carlohcs.me${getImageUrl('home/carlohcs-lg.png')}",
            "jobTitle": "Software Engineer",
            "description": "${getMessage('page', 'seoDescription')}",
            "sameAs": [
              "https://github.com/carlohcs",
              "https://linkedin.com/in/carlohcs",
              "https://twitter.com/carlohcs"
            ],
            "knowsAbout": ["JavaScript", "React", "Node.js", "Frontend Development", "Software Architecture"],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            }
          }`}
        </script>
      </Head>
      <Header />
      <Menu />
      { isTransitioning && <div className="loading-indicator" /> }
      { translationKey &&
          <>
            <CustomHead title={getMessage(translationKey, 'title')} />
            {translationKey !== 'home' && <Introduction translationKey={translationKey} />}
          </>
      }

      { mainContent }
    </div>
  )
})

Main.propTypes = {
  children: PropTypes.node,
  router: PropTypes.object
}

// https://stackoverflow.com/questions/49809884/access-react-context-outside-of-render-function?answertab=votes#tab-top
// https://reactjs.org/docs/hooks-reference.html#usecontext
export {
  Main
}
