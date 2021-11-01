import { call, put } from 'redux-saga/effects';
import { coursesFetchSuccess, coursesFetchFail } from '../../AC/courses';
import CoursesApi from '../../../api/Courses';

function* fetch() {
  try {
    const response = yield call(CoursesApi.fetchAll);

    if (response.status === 200) {
      yield put(coursesFetchSuccess(response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(coursesFetchFail(e.message));
  }
}

export default fetch;