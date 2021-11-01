import * as actions from '../actions/courses';

// GET ALL COURSES
export const coursesFetch = () => ({ type: actions.COURSES_FETCH });
export const coursesFetchSuccess = data => ({ type: actions.COURSES_FETCH_SUCCESS, data });
export const coursesFetchFail = error => ({ type: actions.COURSES_FETCH_FAIL, error });