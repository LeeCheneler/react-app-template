/* eslint-disable no-console */
const argv = require('yargs').argv
const path = require('path')
const express = require('express')
const compression = require('compression')

// Initialise express app and configure to compress responses
const app = express()
app.use(compression())

// Serve static files from the public folder (js, css, images, etc)
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))

// Serve SPA web app on all routes by default
// This allows you to browse to a route that only exists via react-router
const indexPath = path.join(publicPath, '/index.html')
app.get('*', (request, response) => response.sendFile(indexPath))

// Start listening on the specified port
if (argv.port) {
  app.listen(argv.port, () => console.info(`Express listening on port ${argv.port}`))
} else {
  console.error('No port provided')
}
