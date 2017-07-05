# react-app-template
[![Build Status](https://travis-ci.org/LeeCheneler/react-app-template.svg?branch=master)](https://travis-ci.org/LeeCheneler/react-app-template)
[![bitHound Overall Score](https://www.bithound.io/github/LeeCheneler/react-app-template/badges/score.svg)](https://www.bithound.io/github/LeeCheneler/react-app-template)
[![bitHound Dependencies](https://www.bithound.io/github/LeeCheneler/react-app-template/badges/dependencies.svg)](https://www.bithound.io/github/LeeCheneler/react-app-template/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/LeeCheneler/react-app-template/badges/devDependencies.svg)](https://www.bithound.io/github/LeeCheneler/react-app-template/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/LeeCheneler/react-app-template/badges/code.svg)](https://www.bithound.io/github/LeeCheneler/react-app-template)


Template designed to get you up and running as quickly as possible with [React](https://github.com/facebook/react) and [Webpack 2](https://github.com/webpack)!

JavaScript and style linting is already set up and working via [ESLint](https://github.com/eslint/eslint) and [StyleLint](https://github.com/stylelint/stylelint).

A bare bones, highly extensible ITCSS style framework in [easy-css](https://github.com/leecheneler/easy-css) is already imported and set up ready to use.

This react app comes with a lightweight [express](https://www.npmjs.com/package/express) app ready configured to round up a fully self hosting app.

## Getting Started

### Copy the template to a new repository on GitHub

1. `git clone --bare https://github.com/leecheneler/react-app-template`
2. `cd react-app-template.git`
3. `git push --mirror https://github.com/leecheneler/my-new-app`
4. Delete the bare repo you pulled down and clone your new repo :)

### Installing dependencies
`yarn install`

### Running the app for development
`yarn start`

### Building the app for deployment
`yarn build`

### Running the app for production via express
`yarn build && yarn express`

### Running tests once
`yarn test`

### Running tests with watch to pick up changes
`yarn test-watch`

### Getting test coverage report
`yarn coverage`

### Lint javascript and sass
`yarn lint`

### Remove express server (it's not for everyone)
`yarn remove express compression yargs && rm -rf express`

Then you need to reconfigure where your `webpack.config.js` outputs a build to by editing this line:
```
dest: path.join(__dirname, '/express/public')
```
to something like:
```
dest: path.join(__dirname, '/dist')
```

Then you need to update your `.eslintignore` to ignore your new build output folder by changing this line:
```
express/public
```
to match your new build output folder
```
dist
```


## Offline support with service workers
Offline first mantra baked in with service worker supported provided via [offline-plugin](https://github.com/NekR/offline-plugin)
