import { SET_IS_AUTHENTICATED } from '../actionTypes';
import { actions as toastrActions } from 'react-redux-toastr'
import { redirect } from '../../utils';

export const setIsAuthenticated = isAuthenticated => ({
  type: SET_IS_AUTHENTICATED,
  isAuthenticated
});


export const authenticate = ({ username, password }) => dispatch => {
  if (username === 'Admin' && password === '12345') {
    dispatch(setIsAuthenticated(true));
    dispatch(toastrActions.add({
      type: 'success',
      title: 'Успех',
      position: 'top-right',
      message: 'Вы успешно авторизованы',
    }));
    redirect('/profile');
  } else {
    dispatch(toastrActions.add({
      type: 'error',
      title: 'Ошибка авторизации',
      attention: true,
      message: 'Неверный логин или пароль',
    }))
  }
};