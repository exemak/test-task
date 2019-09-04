import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getLocalStorageItem, setLocalStorageItem } from '../utils';
import rootReducer from './reducers';

const persistedState = getLocalStorageItem('persistedState') || {};
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  const { auth } = store.getState();
  setLocalStorageItem('persistedState', { auth })
});

export default store;
