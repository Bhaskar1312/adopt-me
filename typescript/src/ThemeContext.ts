import {createContext} from "react";
// .ts is enough as no jsx

// mimic useState, useReducer
const ThemeContext = createContext<[string, (theme: string)=> void]>(["#green"], ()=>{}); // app works even without values, but good for type checking
// default value, empty function

export default ThemeContext;