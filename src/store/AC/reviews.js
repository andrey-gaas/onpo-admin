import * as actions from '../actions/reviews';

// GET ALL REVIEWS
export const reviewsFetch = () => ({ type: actions.REVIEWS_FETCH });
export const reviewsFetchSuccess = data => ({ type: actions.REVIEWS_FETCH_SUCCESS, data });
export const reviewsFetchFail = error => ({ type: actions.REVIEWS_FETCH_FAIL, error });

// GET ONE REVIEW
export const reviewFetch = () => ({ type: actions.REVIEW_FETCH });
export const reviewFetchSuccess = data => ({ type: actions.REVIEW_FETCH_SUCCESS, data });
export const reviewFetchFail = error => ({ type: actions.REVIEW_FETCH_FAIL, error });

// CREATE REVIEW
export const reviewsAddFetch = data => ({ type: actions.REVIEW_ADD, data });
export const reviewsAddSuccess = data => ({ type: actions.REVIEW_ADD_SUCCESS, data });
export const reviewsAddFail = error => ({ type: actions.REVIEW_ADD_FAIL, error });
export const reviewsAddStatus = status => ({ type: actions.REVIEW_ADD_STATUS, status });

// EDIT REVIEW
export const reviewsEdit = data => ({ type: actions.REVIEW_EDIT, data });
export const reviewsEditSuccess = data => ({ type: actions.REVIEW_EDIT_SUCCESS, data });
export const reviewsEditFail = (id, error) => ({ type: actions.REVIEW_EDIT_FAIL, id, error });

// REMOVE REVIEW
export const reviewsRemove = id => ({ type: actions.REVIEW_REMOVE, id });
export const reviewsRemoveSuccess = id => ({ type: actions.REVIEW_REMOVE_SUCCESS, id });
export const reviewsRemoveFail = (id, error) => ({ type: actions.REVIEW_REMOVE_FAIL, id, error });
