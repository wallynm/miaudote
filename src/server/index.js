const PORT = 3000
const SERVER_TIMEOUT = 10000

const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './src/frontend' })
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(cookieParser())
  server.use(express.static('/.dist'))

  server.get('*', (req, res) => {
    handle(req, res);
  });

  // Pages
  server.get('/', (req, res) => app.render(req, res, '/index', req.params))
  server.get('/login', (req, res) => app.render(req, res, '/login', req.params))

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
  // server.timeout = SERVER_TIMEOUT
})