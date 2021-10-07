import { combineReducers } from 'redux';

function reducer(store = {test: '123'}) {
  return store;
}

export default combineReducers({
  reducer,
});
