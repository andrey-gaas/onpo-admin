import { all } from 'redux-saga/effects';
import auth from './auth';
import reviews from './reviews';
import courses from './courses';
import users from './users';

function* rootSaga() {
  yield all([
    auth(),
    reviews(),
    courses(),
    users(),
  ]);
}

export default rootSaga;