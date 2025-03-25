const express = require('express')
const { loadNuxt, build } = require('nuxt')

const app = express()
const isDev = process.env.NODE_ENV !== 'production'

async function start() {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  if (isDev) {
    build(nuxt)
  }

  app.use(nuxt.render)

  const port = process.env.PORT || 3000
  app.listen(port, '0.0.0.0')
  console.log(`Server is listening on http://localhost:${port}`)
}

start()
