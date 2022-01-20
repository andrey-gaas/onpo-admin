import { all } from 'redux-saga/effects';
import auth from './auth';
import reviews from './reviews';
import courses from './courses';
import users from './users';
import teachers from './teachers';

function* rootSaga() {
  yield all([
    auth(),
    reviews(),
    courses(),
    users(),
    teachers(),
  ]);
}

export default rootSaga;