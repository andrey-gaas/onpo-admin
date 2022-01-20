import * as actions from '../actions/teachers';

// GET ALL TEACHERS
export const teachersFetch = () => ({ type: actions.TEACHERS_FETCH });
export const teachersFetchSuccess = data => ({ type: actions.TEACHERS_FETCH_SUCCESS, data });
export const teachersFetchFail = error => ({ type: actions.TEACHERS_FETCH_FAIL, error });
