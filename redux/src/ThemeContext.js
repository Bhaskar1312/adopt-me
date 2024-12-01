import {createContext} from "react";

// mimic useState, useReducer
const ThemeContext = createContext(["#green"], ()=>{}); // app works even without values, but good for type checking
// default value, empty function

export default ThemeContext;