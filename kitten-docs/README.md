# kitten-docs

Kitten documentation/API reference app.

## Getting Started - App

The React web app is located within the `/app` folder.

`cd app`

#### Installing dependencies

`yarn install`

#### Start the app with webpack

`yarn start`

#### Build the app into a `/dist` folder

This also runs the unit tests and linting

`yarn build`

#### Run unit tests

`yarn test`

#### Run unit tests in watch mode

`yarn test-watch`

#### Get test coverage report

`yarn coverage`

#### Lint javascript and sass

`yarn lint`

## Getting started - Server

The Express app is located within the `/server` folder.

`cd server`

#### Installing dependencies

`yarn install`

#### Start Express server

`yarn start`

## Build the app

#### Build app and bundle with server

`sh build.sh`

#### Build docker image

`docker build -t your-tag:v1 .`

## Offline support with service workers

Offline first mantra baked in with service worker supported provided via [offline-plugin.](https://github.com/NekR/offline-plugin)
