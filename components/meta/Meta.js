import { useContext } from 'react'

import Head from 'next/head'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import { useMetaContent } from '../../hooks/use-meta-content'
import { getImageUrl } from '../helpers/get-image-url'
import { getThemeInitScript } from '../helpers/theme-init'
import { AppContext } from '../providers/AppProvider'

const Meta = withRouter(({ router, customTitle, metaContent }) => {
  const { getMessage } = useContext(AppContext)
  const dynamicMetaContent = useMetaContent({ router, customTitle })

  // Prioridade: metaContent passado como prop sobrescreve o dinâmico
  const finalMetaContent = {
    ...dynamicMetaContent,
    ...(metaContent || {})
  }

  return (
    <>
      <Head>
        {/* ========================================= */}
        {/* 🔴 PRIORIDADE CRÍTICA - Essencial       */}
        {/* ========================================= */}

        {/* EVITA FOUC - Flash of Unstyled Content */}
        {/* 1. HTML carrega (sem estilos) */}
        {/* 2. O JavaScript executa e define o tema */}
        {/* 3. O CSS é aplicado */}
        {/* SCRIPT CRÍTICO - Executa antes de qualquer CSS */}
        <script dangerouslySetInnerHTML={{ __html: getThemeInitScript() }} />

        {/* Configurações básicas do navegador */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{finalMetaContent.title}</title>
        <meta charSet="utf-8" />

        {/* SEO fundamental - impacto direto no ranking */}
        <meta name="description" content={finalMetaContent.description} />
        <meta name="keywords" content={finalMetaContent.keywords} />
        <meta name="author" content={finalMetaContent.author} />

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
        <meta data-hid="og:site_name" name="og:site_name" property="og:site_name" content={finalMetaContent.siteName} />
        <meta property="og:title" content={finalMetaContent.title} />
        <meta property="og:description" content={finalMetaContent.description} />
        <meta property="og:url" content={finalMetaContent.url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={finalMetaContent.locale} />

        {/* Imagem principal para compartilhamento */}
        <meta property="og:image" content={finalMetaContent.image} />
        <meta property="og:image:alt" content={finalMetaContent.imageAlt} />
        {/* <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:secure_url" content={finalMetaContent.image} />

        {/* Informações específicas para artigos/portfolio */}
        <meta property="article:author" content={finalMetaContent.author} />
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
        <meta property="twitter:title" content={finalMetaContent.title} />
        <meta property="twitter:description" content={finalMetaContent.description} />
        <meta property="twitter:image" content={finalMetaContent.image} />
        <meta name="twitter:image:alt" content={finalMetaContent.imageAlt} />
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
    </>
  )
})

Meta.propTypes = {
  router: PropTypes.object,
  customTitle: PropTypes.string,
  metaContent: PropTypes.object
}

export {
  Meta
}
