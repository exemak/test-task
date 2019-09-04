import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import users from './users';
import currentUser from './currentUser';
import auth from './auth';


const rootReducer = combineReducers({
  users,
  currentUser,
  auth,
  toastr: toastrReducer
});

export default rootReducer;