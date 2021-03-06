import { combineReducers } from 'redux';
import login from './login';
import loginModal from './loginModal'
import register from "./register";
import profile from "./profile";
import picture from "./picture";

export default combineReducers({
  login,
  loginModal,
  register,
  profile,
  picture
});