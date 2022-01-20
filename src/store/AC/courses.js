import * as actions from '../actions/courses';

// GET ALL COURSES
export const coursesFetch = () => ({ type: actions.COURSES_FETCH });
export const coursesFetchSuccess = data => ({ type: actions.COURSES_FETCH_SUCCESS, data });
export const coursesFetchFail = error => ({ type: actions.COURSES_FETCH_FAIL, error });

// GET ONE COURSE
export const courseFetch = () => ({ type: actions.COURSE_FETCH });
export const courseFetchSuccess = data => ({ type: actions.COURSE_FETCH_SUCCESS, data });
export const courseFetchFail = error => ({ type: actions.COURSE_FETCH_FAIL, error });

// CREATE COURSE
export const courseAddFetch = data => ({ type: actions.COURSE_ADD, data });
export const courseAddSuccess = data => ({ type: actions.COURSE_ADD_SUCCESS, data });
export const courseAddFail = error => ({ type: actions.COURSE_ADD_FAIL, error });
export const courseAddStatus = status => ({ type: actions.COURSE_ADD_STATUS, status });

// EDIT COURSE
export const courseEdit = data => ({ type: actions.COURSE_EDIT, data });
export const courseEditSuccess = data => ({ type: actions.COURSE_EDIT_SUCCESS, data });
export const courseEditFail = (id, error) => ({ type: actions.COURSE_EDIT_FAIL, id, error });

// REMOVE COURSE
export const courseRemove = id => ({ type: actions.COURSE_REMOVE, id });
export const courseRemoveSuccess = id => ({ type: actions.COURSE_REMOVE_SUCCESS, id });
export const courseRemoveFail = (id, error) => ({ type: actions.COURSE_REMOVE_FAIL, id, error });
