import { call, put } from 'redux-saga/effects';
import { reviewsEditSuccess, reviewsEditFail } from '../../AC/reviews';
import ReviewsApi from '../../../api/Reviews';

function* editFetch({ data }) {
  try {
    const response = yield call(ReviewsApi.edit, data.id, data);

    if (response.status === 200) {
      yield put(reviewsEditSuccess(response.data));
    }

    if (response.status === 500) {
      yield put(reviewsEditFail(data.id, response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(reviewsEditFail(data.id, e.message));
  }
}

export default editFetch;