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


jsx imports React for us. React.createElement is what jsx compiles to
can be js/jsx file
typescript requires to be tsx, otherwise it will not compile

<Pet name="Luna" animal="Dog" breed="Havanese" />
// props are immutable, can't change them, above passes {props.name, props.animal, props.breed}
<Pet name="Luna" animal="Dog" breed="Havanese" ></Pet> //to pass children inside


// fix eslint error for jsx
> npm i -D eslint-plugin-import@2.25.4 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-react@7.28.1 eslint-plugin-react-hooks@4.3.0

```json
in .eslintrc.json
"extends": ["eslint:recommended","plugin:react/recommended","plugin:jsx-a11y/recommended","plugin:import/errors","plugin:import/warnings","prettier"], // prettier-react is merged to prettier 

"plugins": ["react","jsx-a11y","import"], 
```
// import plugin is for import/export statements across files, which eslint doesn't do at present
// jsx-a11y is for accessibility, checks for img without alt, ...
```json
"rules": {
    "react/prop-types": 0 or "off", 1 for warn, 2 for error // to turn off prop-types
    "react/react-in-jsx-scope": "off" // to turn off react import in jsx
  }
```
// to turn off prop-types, we can use typescript or flow for type checking
```json
"settings": {
    "react": {
      "version": "detect" // to detect react version, react changed, we are telling it to detect itself
    }
  }
```
}
```

> npm audit
> npm audit fix // to fix the vulnerabilities


// do not put hooks inside if statements or loops. 
useState depends on the order of the hooks, so we can't put it inside an if statement. It has to be called everytime in same order
setLocation is a closure, so it can't be placed outside the function
// onChange={e => setLocation(e.target.value)} // this will be rendered many times
// onXXX is a react event, it will be intercepted by react before browser as react does it fast

// <input type="text" id="location" value={location} placeholder="Location" onChange={e => setLocation(e.target.value)} /> // controlled component, value is controlled by react
// instead of controlled form by react, use <form onSubmit={handleSubmit}> // uncontrolled form by react

> npm i -D eslint-plugin-react-hooks@4.3.0
```
"extends": [
"react-hooks:recommended"
],
plugins: ["react-hooks"]
```
// key is for react to destroy and recreate the element, so that it doesn't have to re-render the whole list
// don't use index as key, as if they swap, it won't be able to identify the change

// useEffect(()=>{}, 
// [])  // //eslint-disable-line react-hooks/exhaustive-deps, incorrect warning

// useEffect, it re-renders twice because of the way react works, it first renders and then updates the state due to api response, so it re-renders again

// someone gives you a city, you call and get zipcode. you do that a lot. That's a candidate for customHook

use elastic search or geocoding api for location search

// supported events or synthetic events
// https://legacy.reactjs.org/docs/events.html#supported-events


// NODE_ENV=development is like 5x slower than production
// npx parcel build src/index.html --no-source-maps --public-url ./ // to build for production
// npx serve dist // to serve the production build

// StrictMode in dev, renders twice, compatible with future react versions
//  <React.StrictMode> // to wrap the app in index.js

// useDebugValue to show in React devtools for custom hooks

// $r in console to see the selected element in react devtools

You cant use router stuff outside BrowserRouter
You can mutliple routers in react, but only one BrowserRouter
You can have nested routes

Link just refreshes that part of the page, not whole page like <a> tag

Route should be inside Routes

Remove <StrictMode> if issue with Routes

use Href error if Link is outside BrowserRouter

HashRouter adds #/ in url, never leave that page

other class components https://reactjs.org/docs/react-component.html

> npm i -D @babel/plugin-proposal-class-properties@7.16.7

.babelrc
```
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```
babel is doing jsx to js transformations, transpiling, polyfilling, etc

