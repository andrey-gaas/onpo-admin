import { call, put } from 'redux-saga/effects';
import { teachersFetchSuccess, teachersFetchFail } from '../../AC/teachers';
import TeachersApi from '../../../api/Teachers';

function* fetch() {
  console.log(123);
  try {
    const response = yield call(TeachersApi.fetchAll);

    if (response.status === 200) {
      yield put(teachersFetchSuccess(response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(teachersFetchFail(e.message));
  }
}

export default fetch;