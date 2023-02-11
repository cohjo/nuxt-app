// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      supabaseSecret: process.env.NUXT_SUPABASE_SECRET,
      supabaseUri: process.env.NUXT_SUPABASE_URI,
    }
  }
})
