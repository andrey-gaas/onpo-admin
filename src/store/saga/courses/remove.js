import { call, put } from 'redux-saga/effects';
import { courseRemoveSuccess, courseRemoveFail } from '../../AC/courses';
import CoursesApi from '../../../api/Courses';

function* remove({ id }) {
  try {
    const response = yield call(CoursesApi.remove, id);

    if (response.status === 200) {
      yield put(courseRemoveSuccess(id));
    }

    if (response.status === 500) {
      yield put(courseRemoveFail(id, response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(courseRemoveFail(id, e.message));
  }
}

export default remove;