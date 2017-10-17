# react-app-template
Template designed to get you up and running as quickly as possible with [React](https://github.com/facebook/react), [Webpack](https://github.com/webpack), [Express](https://www.npmjs.com/package/express) and [Docker](https://www.docker.com/)!

JavaScript and style linting is already set up and working via [ESLint](https://github.com/eslint/eslint) and [StyleLint](https://github.com/stylelint/stylelint).

A bare bones, highly extensible ITCSS style framework in [pluto-css's foundation module](https://github.com/pluto-css-foundation) is already imported and set up ready to use.

This react app comes with a lightweight node Express app ready configured to round up a fully self hosting app and a dockerfile configured to build the web app and then bundle it and the express server into a Docker image ready to run in production.

## Setup a new project

1. Make a copy of react-app-template for your app and step into it
```
> git clone https://github.com/leecheneler/react-app-template my-app
> rm -rf my-app/.git
> cd my-app
```
2. Initialise a git respository and commit to it
```
> git init
> git add .
> git commit -m "initial commit"
```
3. Push to remove git server such as github
```
> git remote add origin git@github.com:leecheneler/my-app.git
> git push -u origin master
```

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
