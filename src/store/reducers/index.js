import { combineReducers } from 'redux';
import auth from './auth';
import reviews from './reviews';
import courses from './courses';
import users from './users';
import teachers from './teachers';

export default combineReducers({
  auth,
  reviews,
  courses,
  users,
  teachers,
});
