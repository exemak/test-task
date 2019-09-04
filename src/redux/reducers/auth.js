import { SET_IS_AUTHENTICATED } from '../actionTypes';

export default (state = { isAuthenticated: false }, action) => {
  switch(action.type) {
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    default:
      return state;
  }
}