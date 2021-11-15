import { call, put } from 'redux-saga/effects';
import { usersFetchSuccess, usersFetchFail } from '../../AC/users';
import UsersApi from '../../../api/Users';

function* fetch() {
  try {
    const response = yield call(UsersApi.fetchAll);

    if (response.status === 200) {
      yield put(usersFetchSuccess(response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(usersFetchFail(e.message));
  }
}

export default fetch;