cd app
yarn install
yarn build
yarn coverage

cd ../server
yarn install
yarn test
yarn lint
yarn coverage
