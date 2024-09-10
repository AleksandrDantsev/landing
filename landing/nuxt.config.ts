// https://nuxt.com/docs/api/configuration/nuxt-config
// import { VitePWA } from 'vite-plugin-pwa'
export default defineNuxtConfig({
  app: {
    baseURL: '/landing',
    head: {
      title: 'My Nuxt 3 App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A description of my Nuxt 3 app' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.png', type: 'image/png' },
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js',
          integrity: 'sha512-HaoDYc3PGduguBWOSToNc0AWGHBi2Y432Ssp3wNIdlOzrunCtB2qq6FrhtPbo+PlbvRbyi86dr5VQx61eg/daQ==',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer'
        }
      ]
    }
  },
  css: [
    '~/node_modules/swiper/swiper-bundle.min.css',
    '~/node_modules/swiper/modules/navigation.css',
    '~/node_modules/swiper/modules/pagination.css', 
    '~/node_modules/swiper/modules/parallax-element.css' 
  ],
  vite: {
    plugins: [
      // VitePWA({
      //   manifest: {
      //     name: 'My PWA App',
      //     short_name: 'PWA App',
      //     description: 'My amazing Progressive Web App!',
      //     lang: 'en',
      //     display: 'standalone',
      //     background_color: '#ffffff',
      //     theme_color: '#000000',
      //     icons: [
      //       {
      //         src: '/icons/favicon.png',
      //         sizes: '192x192',
      //         type: 'image/png'
      //       },
      //       // {
      //       //   src: '/icons/icon-512x512.png',
      //       //   sizes: '512x512',
      //       //   type: 'image/png'
      //       // }
      //     ]
      //   },
      //   workbox: {
      //     runtimeCaching: [
      //       {
      //         urlPattern: /^https:\/\/.*$/,
      //         handler: 'NetworkFirst',
      //         options: {
      //           cacheName: 'network-cache',
      //           expiration: {
      //             maxEntries: 50,
      //             maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
      //           }
      //         }
      //       }
      //     ]
      //   }
      // })
    ]
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})
