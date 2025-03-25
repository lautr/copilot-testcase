module.exports = {
  mode: 'universal',
  head: {
    title: 'copilot-testcase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A basic Nuxt 2 / Vue 2 SSR application' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: [],
  modules: [],
  build: {
    extend(config, ctx) {}
  }
}
