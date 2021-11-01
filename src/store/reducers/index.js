import { combineReducers } from 'redux';
import reviews from './reviews';
import courses from './courses';

export default combineReducers({
  reviews,
  courses,
});
