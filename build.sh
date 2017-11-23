#!/bin/bash

cd app
yarn install
yarn build
yarn coverage
cd ..

cd server
yarn install
yarn test
yarn lint
yarn coverage
rm -rf node_modules
yarn install --production
cd ..

mv app/dist server/public
