import { all } from 'redux-saga/effects';
import auth from './auth';
import reviews from './reviews';

function* rootSaga() {
  yield all([
    auth(),
    reviews(),
  ]);
}

export default rootSaga;