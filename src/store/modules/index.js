import { combineReducers } from 'redux';
import login from './login';
import loginModal from './loginModal'
import register from "./register";

export default combineReducers({
  login,
  loginModal,
  register
});