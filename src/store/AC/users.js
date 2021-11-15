import * as actions from '../actions/users';

// GET ALL USERS
export const usersFetch = () => ({ type: actions.USERS_FETCH });
export const usersFetchSuccess = data => ({ type: actions.USERS_FETCH_SUCCESS, data });
export const usersFetchFail = error => ({ type: actions.USERS_FETCH_FAIL, error });

// EDIT USER
export const userEdit = data => ({ type: actions.USER_EDIT, data });
export const userEditSuccess = data => ({ type: actions.USER_EDIT_SUCCESS, data });
export const userEditFail = (id, error) => ({ type: actions.USER_EDIT_FAIL, id, error });

// REMOVE USER
export const userRemove = id => ({ type: actions.USER_REMOVE, id });
export const userRemoveSuccess = id => ({ type: actions.USER_REMOVE_SUCCESS, id });
export const userRemoveFail = (id, error) => ({ type: actions.USER_REMOVE_FAIL, id, error });
