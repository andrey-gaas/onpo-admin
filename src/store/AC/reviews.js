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
export const reviewsAddFetch = () => ({ type: actions.REVIEW_ADD });
export const reviewsAddSuccess = data => ({ type: actions.REVIEW_ADD_SUCCESS, data });
export const reviewsAddFail = error => ({ type: actions.REVIEW_ADD_FAIL, error });

// EDIT REVIEW
export const reviewsEdit = () => ({ type: actions.REVIEW_EDIT });
export const reviewsEditSuccess = data => ({ type: actions.REVIEW_EDIT_SUCCESS, data });
export const reviewsEditFail = error => ({ type: actions.REVIEW_EDIT_FAIL, error });

// REMOVE REVIEW
export const reviewsRemove = () => ({ type: actions.REVIEW_REMOVE });
export const reviewsRemoveSuccess = data => ({ type: actions.REVIEW_REMOVE_SUCCESS, data });
export const reviewsRemoveFail = error => ({ type: actions.REVIEW_REMOVE_FAIL, error });
