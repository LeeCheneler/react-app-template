/* eslint-disable no-console */
const argv = require('yargs').argv
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const compression = require('compression')

// Initialise express app and configure *some* security headers and compression
const app = express()
app.use(helmet())
app.use(compression())

// Serve static files from the public folder (js, css, images, etc)
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))

// Serve SPA web app on all routes by default
// This allows you to browse to a route that only exists via react-router
const indexPath = path.join(publicPath, '/index.html')
app.get('*', (request, response) => response.sendFile(indexPath))

// Start listening on the specified port
const port = argv.port ? argv.port : 3000
app.listen(port, () => console.info(`Express listening on port ${port}`))
