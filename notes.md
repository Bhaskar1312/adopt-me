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


// useContext + useReducer = redux most of the time
// Redux is used for complex state management, redux-saga for side effects, redux-thunk for async actions
// xState for state machines like dead/alive with health=0/>0 in games, list all possible state
// Often you'll use context instead of Redux or another state store. You could get fancy and use useReducer and useContext together to get a pretty great approximation of Redux-like features.


useCallback - memoize a function, so that it doesn't re-render everytime

useLayoutEffect - useful if we want something to be run immediately rather than later like useEffect and synchronous
 If you're migrating from a class component to a hooks-using function component, this can be helpful too because useLayout runs at the same time as componentDidMount and componentDidUpdate whereas useEffect is scheduled after. This should be a temporary fix.

The only time you should be using useLayoutEffect is to measure DOM nodes for things like animations.

, whenever you have an invalid form, it will immediately focus the the first field that's invalid. If you look at the code, ElaborateInput is a child element so the parent component shouldn't have any access to the input contained inside the component. Those components are black boxes to their parents. All they can do is pass in props. So how do we accomplish it then?

The first thing we use is useImperativeHandle. This allows us to customize methods on an object that is made available to the parents via the useRef API. Inside ElaborateInput we have two refs: one thate is the one that will be provided by the parent, forwarded through by wrapping the ElaborateInput component in a forwardRef call which will ten provide that second ref parameter in the function call, and then the inputRef which is being used to directly access the DOM so we can call focus on the DOM node directly.

From the parent, we assign via useRef a ref to each of the ElaborateInputs which is then forwarded on each on via the forwardRef. Now, on these refs inside the parent component we have those methods that we made inside the child so we can call them when we need to. In this case, we'll calling the focus when the parent knows that the child has an error.


useDebugValue allows you to surface information from your custom hook into the dev tools. This allows the developer who is consuming your hook (possibly you, possibly your coworker) to have whatever debugging information you choose to surfaced to them. If you're doing a little custom hook for your app (like the breed one we did in the Intro course) this probably isn't necessary. However if you're consuming a library that has hooks (like how react-router-dom has hooks) these can be useful hints to developers.
```

> npm i -D tailwindcss@3.0.22 postcss@8.4.6 autoprefixer@10.4.2

// postcss is like babel for css, it transpiles css to older css for browser compatibility. non-standard css, futuristic css, css variables
// autoprefixer is a postcss plugin, it adds vendor prefixes to css properties, like -webkit, -moz, -ms, -o

> npx tailwindcss init (-p) // to create tailwind.config.js

tailwind css intellisense vs code extension

.postcssrc 
```
{
  "plugins": {
    "tailwindcss": {},
    "autoprefixer": {}
  }
}
```
// rem, em are relative units, rem is relative to root font size, em is relative to parent font size
// p-0 to p-12 and then p-14, p-16, p-20, p-24, p-32, p-40, p-48, p-56, p-64, p-px
// m-0 to m-12 and then m-14, m-16, m-20, m-24, m-32, m-40, m-48, m-56, m-64, m-px
// negative margin -m-10
// There's also mt, ml, mr, mb for top, left, right, bottom and mx for left and right and my for top and bottom (these all apply to p as well.)

> https://btholt.github.io/complete-intro-to-react-v7/lessons/tailwindcss/tailwind-basics

w-full: Sets the width to 100%.
mb-10: Adds a margin-bottom of 2.5rem (40px).
text-center: Centers the text.
p-7: Adds padding of 1.75rem (28px) on all sides.
bg-gradient-to-b: Sets a background gradient that goes from top to bottom.
from-purple-400: The gradient starts with the color purple-400.
via-pink-500: The gradient transitions through the color pink-500.
to-red-500: The gradient ends with the color red-500.

// emotion and styled components are good for javascript controlled animations
// my-auto margin top bottom - auto, mx-0 margin left right - 0, centering the element

// flex

<div className="grid gap-4 grid-cols-2">[…]</div>

grid puts you into display: grid.
gap-4 gives you the gutters between with the number representing how big.
grid-cols-2 says how many you want per row.
But we're not done here. Let's make it responsive too.

<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">[…]</div>
🤯

The sm: is the small breakpoint which is larger than 640px apply this style (these can be adjusted and renamed)
The lg: is the large breakpoint is larger than 1024px. There's also md, xl, and 2xl too.


> npm -i -D @tailwindcss/forms@0.4.0
 tailwindcss.config 
> plugins: [require('@tailwindcss/forms')]

// explicitly mention type=text for input, as tailwindcss doesn't style other types
// flex-box and grid

// responsive design width breakpoints
// grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 in Result.js

code-splitting - when code is too much js, sent to browser, it can be sent to server lazily
// Details page isn't too big but imagine if it had libraries like Moment or Lodash on it! It could be a big savings.


spaceship for zsh terminal

render, DOM, document in Modal, window, fetch cant be rendered in node, have to be in browser
use hydrate for server side rendering instead of render 

> npm i express@4.17.1

//   "start": "node dist/backend/index.js", // if issues in windows for && 
// on package.json

// // node doesn't run jsx,es modules something needs to compile them, parcel gonna read this and build
//  "optimize": false, // as we are not sending over the network, we need better error messages

test after npm run build, start by disabling js in browser

// We're also using ReactDOM.hydrate instead of ReactDOM.render because this will hydrate existing markup with React magic ✨ rather than render it from scratch.

some error in server-side-rendering, images not being shown, try and fix later

// put critical in head and rest in body
// or put defer async for non-critical so that they are non-blocking

> npm i -D typescript@4.5.5
flow can also be used which is by facebook
> npx tsc --init
// put ES2021, strictMode on, jsx preserve

> npm i -D @types/react@17.0.39 @types/react-dom@17.0.11 

for typescript tsx is required unlike jsx for js. ts is not sufficient
> npm uninstall @babel/eslint-parser
> npm install -D eslint-import-resolver-typescript@2.5.0 @typescript-eslint/eslint-plugin@5.13.0 @typescript-eslint/parser@5.13.0

Add the following to .eslintrc.json
```
// inside extends, above prettier rules
"plugin:@typescript-eslint/recommended",

// inside rules, generally a good rule but we're going to disable it for now
"@typescript-eslint/no-empty-function": 0

// inside plugins
"@typescript-eslint"

// replace parser
"parser": "@typescript-eslint/parser",

// add to settings array
"import/parsers": {
"@typescript-eslint/parser": [".ts", ".tsx"]
},
"import/resolver": {
"typescript": {
"alwaysTryTypes": true
}
}
```

ESLint: 8.8.0  Error: Error while loading rule '@typescript-eslint/await-thenable': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser. Occurred while linting
```json{
"parser": "@typescript-eslint/parser",
"parserOptions": {
"project": "./tsconfig.json"
},
}```

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules

// localCache can have anything as a key so we need to let TypeScript know that. We have a generic "index" key that could be anything, and we're letting TypeScript know that only string arrays can be set as values.
// Since [] and "unloaded" aren't explcit enough for TypeScript know that those are a string[] or a Status, we can cast them to TypeScript definitely knows what they are.
