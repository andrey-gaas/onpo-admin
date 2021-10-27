import { call, put } from 'redux-saga/effects';
import { reviewsFetchSuccess, reviewsFetchFail } from '../../AC/reviews';
import ReviewsApi from '../../../api/Reviews';

function* fetch() {
  try {
    const response = yield call(ReviewsApi.fetchAll);

    if (response.status === 200) {
      yield put(reviewsFetchSuccess(response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(reviewsFetchFail(e.message));
  }
}

export default fetch;