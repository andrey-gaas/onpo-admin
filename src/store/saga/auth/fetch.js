import { call } from 'redux-saga/effects';
import AuthApi from '../../../api/Auth';

function* fetchLots() {
  try {
    const response = yield call(AuthApi.check);

    if (response.status === 200) {
      console.log(response.data.libraryCardNumber);
      localStorage.setItem('card', response.data.libraryCardNumber);
      /* if (status === 'active') yield put(setActiveLots(response.data));
      else if (status === 'completed') yield put(setCompletedLots(response.data));
      else if (status === 'coming') yield put(setComingLots(response.data)); */
    }
  } catch(e) {
    console.error('ОШИБКАААААААААААА');
    console.error(e);
  }
}

export default fetchLots;