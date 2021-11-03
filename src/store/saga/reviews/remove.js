import { call, put } from 'redux-saga/effects';
import { reviewsRemoveSuccess, reviewsRemoveFail } from '../../AC/reviews';
import ReviewsApi from '../../../api/Reviews';

function* remove({ id }) {
  try {
    const response = yield call(ReviewsApi.remove, id);

    if (response.status === 200) {
      yield put(reviewsRemoveSuccess(id));
    }

    if (response.status === 500) {
      yield put(reviewsRemoveFail(id, response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(reviewsRemoveFail(id, e.message));
  }
}

export default remove;