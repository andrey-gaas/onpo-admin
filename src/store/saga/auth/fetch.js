import { call, put } from 'redux-saga/effects';
import { authSuccess, authFail } from '../../AC/auth';
import AuthApi from '../../../api/Auth';

function* fetchLots() {
  try {
    const response = yield call(AuthApi.check);

    if (response.status === 200) {
      console.log('ZAEBIS');
      console.log(response);
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