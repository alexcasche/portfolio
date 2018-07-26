# React Starter

React app boilerplate for use with redux, reselect, and styled-components.

![Build Status][Travis-shield] ![JavaScript Style Guide][Prettier-shield] ![Packagist][MIT-shield]

## Installation

1.  Clone the repository

```bash
  git clone https://github.com/alexcasche/react-starter
```

2.  Create .env file with NODE_PATH

```bash
  echo "NODE_PATH=src/" > myfile.txt
```

3.  Run tests for errors

```bash
  yarn test
  npm test
```

## Development

1.  Run test watcher

```bash
  yarn test:watch
  npm test:watch
```

2.  Start dev server

```bash
  yarn start
  npm start
```

## Deployment

1.  Deploy to gh-pages

```bash
  yarn deploy
  npm deploy
```

2.  Automate builds with Travis-CI

  * Visit travis-ci.com & add the repo
  * Open repo settings and add GITHUB_TOKEN


[//]: <References>

[Travis-shield]: <https://travis-ci.com/alexcasche/react-starter.svg?branch=master>
[Prettier-shield]: <https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-circle>
[MIT-shield]: <https://img.shields.io/packagist/l/doctrine/orm.svg>