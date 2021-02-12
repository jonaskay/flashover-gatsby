# Flashover

[![Netlify Status](https://api.netlify.com/api/v1/badges/f7e5f080-bc10-4101-9e03-a022684787cf/deploy-status)](https://app.netlify.com/sites/flashover/deploys)

This is my personal blog built with [Gatsby](https://www.gatsbyjs.com/). You can read it at: <https://www.flashover.blog/>.

## Getting started

### Requirements

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

To install dependencies, run

    $ yarn

### Environment variables

Add a `.env.development` file to the project root to enable environment variables for development. See [`.env.example`](.env.example) for the required environment variables.

If you want to test out the production build of the site, you need to also add a `.env.production` file.

## Useful commands

To start the development server, run

    $ yarn start

To build the site, run

    $ yarn build

To preview a built version of the site locally, run

    $ yarn build && yarn serve

## Testing

To run the tests, run

    $ yarn test

To run the tests in watch mode, run

    $ yarn test --watch

End-to-end tests are located in [`cypress/e2e`](cypress/e2e). You can run them by running

    $ yarn test:e2e

To run the e2e tests in CI mode, run

    $ yarn test:e2e:ci

## Deployment

The site is deployed using [Netlify](https://www.netlify.com/). Deploy config can be found in [`.netlify.toml`](.netlify.toml).

Each push to the `main` branch triggers a new build.
