> vscode-icons extension
>
html:5 shortcut for html boilerplate - emmet for vs code

// https://btholt.github.io/complete-intro-to-react-v7/

don't put any logic/state in the render method

put App.js script after React and ReactDOM scripts

> npm init -y

code formatter
// save on format setting in vs code(check)
> npx prettier src/app.js 
>
> npx prettier src/app.js --write

Inside .prettierrc, just `{}`
```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```
in extensions, install prettier and check prettier: require config

in package.json, scripts add
> `"format": "npx prettier --write \"src/**/*.{js,jsx}\""`
>
> npm i -D prettier
> npm run format

In node_modules > bin > prettier, we can see the prettier binary file

> npm i -D eslint@8.8.0 eslint-config-prettier@8.3.0 

Inside .eslintrc.json, add prettier at last in extends, turns off other configs
```json
{
  "extends": ["eslint:recommended","prettier"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true // what file type we are using
    }
  },
  "env": {
    "es6": true, // allow es6 syntax, weakmap, weakset etc..
    "browser": true, // allow things like document, window, fetch
    "node": true // allow things like process, require
  }
}
```
> npx eslint src/app.js 

``/* global React ReactDOM document fetch */ at App.js first line``

And extension eslint by MS

// add ```"lint": "npx eslint src/**/*.{js,jsx} --quiet"``` in package.json scripts
// quiet for bare min stuff that is broken

> npx prettier --help

> "format:check": "prettier --check \"src/**/*.{js,jsx}\"", // inside github actions, fail if someone doesn't run prttier before pushing code

Use to pass arg to eslint args
> npm run lint -- --fix // fix for eslint rather than npm 

> npm i -D parcel@2.3.0

> "start": "parcel src/index.html", // in package.json scripts
If something is not working, try to delete parcel-cache dist folders

> npm i react@17.0.2 react-dom@17.0.2

> script type="module" in index.html for app.js

> npx create-react-app test-app

```add in package.json
"browserslist": [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions"
  ]
```
go to https://browserslist.dev to check how much does last two versions cover
