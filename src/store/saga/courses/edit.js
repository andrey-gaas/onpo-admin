import { call, put } from 'redux-saga/effects';
import { courseEditSuccess, courseEditFail } from '../../AC/courses';
import CoursesApi from '../../../api/Courses';

function* editFetch({ data }) {
  try {
    const response = yield call(CoursesApi.edit, data.id, data);

    if (response.status === 200) {
      yield put(courseEditSuccess(response.data));
    }

    if (response.status === 500) {
      yield put(courseEditFail(data.id, response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(courseEditFail(data.id, e.message));
  }
}

export default editFetch;