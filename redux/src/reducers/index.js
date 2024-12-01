import { combineReducers } from "redux";
import location from './location';
import breed from './breed';
import animal from './animal';
import theme from './theme';

export default combineReducers({
  location: location,
  // location // same as line above
  breed,
  animal,
  theme
});