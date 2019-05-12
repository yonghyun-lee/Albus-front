// 편의상, 나중에 액션 생성 함수들을 미리 바인딩해서 내보냄

import {bindActionCreators} from "redux";
import {actionCreators as LoginActionCreator} from './modules/login';
import {actionCreators as LoginModalActionCreator} from './modules/loginModal';

import store from './index';

const { dispatch } = store;

export const LoginActions = bindActionCreators(LoginActionCreator, dispatch);
export const LoginModalActions = bindActionCreators(LoginModalActionCreator, dispatch);
