import { call, put } from 'redux-saga/effects';
// import { usersFetchSuccess, usersFetchFail } from '../../AC/users';
// import ReviewsApi from '../../../api/Reviews';

function* fetch() {
  console.log('FETCH');
  /* try {
    const response = yield call(ReviewsApi.fetchAll);

    if (response.status === 200) {
      yield put(reviewsFetchSuccess(response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(reviewsFetchFail(e.message));
  } */
}

export default fetch;