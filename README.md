# weather-app

Created with vue-cli interface adding [typescript plugin](https://cli.vuejs.org/core-plugins/typescript.html) and [vuetify](https://vuetifyjs.com/en/) Framework.

The app consist in just two pages, whose routes are managed using [vue-router](https://router.vuejs.org/).

Geo locations are saved in the local storage and live through different sessions. Weather data are stored using [pinia](https://pinia.vuejs.org/) to optimize API calls and are valid for the single session;

Some component and utility function tests were set up with [jest](https://jestjs.io/) and [vue-test-utils](https://test-utils.vuejs.org/guide/).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
