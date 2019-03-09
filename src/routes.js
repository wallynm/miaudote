// routes.js
const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('Home', '/')
routes.add('Login', '/login')
routes.add('Signup', '/signup')