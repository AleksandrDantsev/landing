// https://nuxt.com/docs/api/configuration/nuxt-config
import { VitePWA } from 'vite-plugin-pwa'
export default defineNuxtConfig({
  vite: {
    plugins: [
      VitePWA({
        manifest: {
          name: 'My PWA App',
          short_name: 'PWA App',
          description: 'My amazing Progressive Web App!',
          lang: 'en',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#000000',
          icons: [
            {
              src: '/icons/favicon.png',
              sizes: '192x192',
              type: 'image/png'
            },
            // {
            //   src: '/icons/icon-512x512.png',
            //   sizes: '512x512',
            //   type: 'image/png'
            // }
          ]
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/.*$/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'network-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
                }
              }
            }
          ]
        }
      })
    ]
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})
