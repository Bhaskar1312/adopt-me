import {createStore} from "redux";
import reducer from './reducers'; // for a directory, node.js will look for index.js file

const store = createStore(
  reducer,
  // this enables the redux dev tools in browser
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ?
    window.__REDUX_DEVTOOLS_EXTENSION__(): (f)=> f
  );

export default store;
