import { SET_CURRENT_USER } from '../actionTypes';
import api from '../../api';


export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser
});

export const fetchCurrentUser = () => async dispatch => {
  const { data: { results: [ currentUser ] } } = await api.get('/api');
  dispatch(setCurrentUser(currentUser));
};
