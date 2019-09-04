import { SET_CURRENT_USER } from '../actionTypes';

export default (state = null, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
}