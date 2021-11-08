import { combineReducers } from 'redux';
import auth from './auth';
import reviews from './reviews';
import courses from './courses';

export default combineReducers({
  auth,
  reviews,
  courses,
});
