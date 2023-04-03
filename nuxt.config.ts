import svgLoader from "vite-svg-loader"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
      plugins: [svgLoader()],
      vue: {
        isProduction: false,
      },
    },
    modules: [
        '@nuxt/image-edge',
    ]
})
