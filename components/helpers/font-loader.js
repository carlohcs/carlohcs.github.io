// import Head from 'next/head'
// import { useEffect, useState } from 'react'

// /**
//  * Hook para carregar fontes com fallback automático
//  * Tenta carregar fontes locais primeiro, depois CDN como fallback
//  */
// export const useFontLoader = () => {
//   const [fontStrategy, setFontStrategy] = useState('local') // 'local', 'cdn', 'loaded'

//   useEffect(() => {
//     const loadLocalFonts = async () => {
//       try {
//         const response = await fetch('/static/fonts/rubik.css')

//         if (response.ok) {
//           const css = await response.text()

//           const style = document.createElement('style')
//           style.textContent = css
//           style.setAttribute('data-font-source', 'local')
//           document.head.appendChild(style)

//           setFontStrategy('loaded')

//           return
//         }
//       } catch (error) {
//         console.warn('Error loading local fonts, using CDN as fallback:', error)
//       }

//       // Fallback para CDN
//       setFontStrategy('cdn')
//     }

//     loadLocalFonts()
//   }, [])

//   return fontStrategy
// }

// export const FontLoader = () => {
//   const fontStrategy = useFontLoader()

//   if (fontStrategy === 'cdn') {
//     return (
//       <>
//         <Head>
//           {/* Preconnect para CDN */}
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

//           {/* Carregamento otimizado da fonte via CDN */}
//           <link
//             rel="preload"
//             as="style"
//             href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap"
//           />
//           <link
//             rel="stylesheet"
//             href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap"
//             media="print"
//             onLoad="this.media='all'"
//           />

//           {/* Fallback para navegadores sem JS */}
//           <noscript>
//             <link
//               rel="stylesheet"
//               href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap"
//             />
//           </noscript>
//         </Head>
//       </>
//     )
//   }

//   // Para fontes locais, não precisamos de nada no head (já injetadas via JS)
//   return null
// }

// /**
//  * Componente para preload das fontes críticas
//  */
// export const FontPreloader = () => (
//   <>
//     <Head>
//       {/* Preload das fontes mais importantes */}
//       <link
//         rel="preload"
//         href="/static/fonts/rubik-300.woff2"
//         as="font"
//         type="font/woff2"
//         crossOrigin="anonymous"
//       />
//       <link
//         rel="preload"
//         href="/static/fonts/rubik-500.woff2"
//         as="font"
//         type="font/woff2"
//         crossOrigin="anonymous"
//       />
//     </Head>
//   </>
// )
