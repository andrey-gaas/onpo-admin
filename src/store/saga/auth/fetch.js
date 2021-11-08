import { call, put } from 'redux-saga/effects';
import AuthApi from '../../../api/Auth';
import { authSuccess, authFail } from '../../AC/auth';

function* fetchLots() {
  try {

    const response = yield call(AuthApi.check);

    if (response.status === 200) {
      localStorage.setItem('card', response.data.libraryCardNumber);
      yield put(authSuccess());
    }

    else if (response.status === 401) {
      localStorage.removeItem('card');
      yield put(authFail());
    }
  } catch(e) {
    yield put(authFail());
    console.error(e);
  }
}

export default fetchLots;