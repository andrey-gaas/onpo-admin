import { call, put } from 'redux-saga/effects';
import { reviewsAddSuccess, reviewsAddFail } from '../../AC/reviews';
import ReviewsApi from '../../../api/Reviews';

function* create({ data }) {
  try {
    const response = yield call(ReviewsApi.add, data);

    if (response.status === 200) {
      yield put(reviewsAddSuccess(response.data));
    }

    if (response.status === 500) {
      yield put(reviewsAddFail(data.id, response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(reviewsAddFail(data.id, e.message));
  }
}

export default create;