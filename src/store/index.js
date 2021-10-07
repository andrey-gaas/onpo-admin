import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

if (process.env.NODE_ENV === 'development') {
  window.getState = store.getState;
}

export default store;
