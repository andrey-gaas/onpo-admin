import { all } from 'redux-saga/effects';
import auth from './auth';
import reviews from './reviews';
import courses from './courses';

function* rootSaga() {
  yield all([
    auth(),
    reviews(),
    courses(),
  ]);
}

export default rootSaga;