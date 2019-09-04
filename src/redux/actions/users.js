import api from '../../api';
import { SET_USERS } from '../actionTypes';

export const setUsers = users => ({
  type: SET_USERS,
  users
});

export const fetchUsers = amount => async dispatch => {
  const { data: { results: users } } = await api.get('/api', {
    params: {
      results: amount
    }
  });
  dispatch(setUsers(users));
};