# FxBro

## What is being used ?

The following resources are used in this application

1. [Frappe Charts](https://frappe.io/charts) (Vue wrapper) - Charting Library
2. [Alpha Vantage API](https://www.alphavantage.co/) - Financial Data

## What I learned

1. How to import external components into a specific component
2. How to structure a VueJs application; I defined a service that is used to send an http request to the Alpha Vantage REST API and a response is structured to fit the format in which the graph expects it to be in
3. How to work with promises and fetch API in VueJs

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
