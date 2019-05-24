import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const SOCIAL_SUCCESS = 'user/SOCIAL_SUCCESS';

// {
//   'type': 'user/LOGIN_SUCCESS',
//   payload: payload
// }
const loginSuccess = createAction(LOGIN_SUCCESS, (payload) => payload);
const socialSuccess = createAction(SOCIAL_SUCCESS, (payload) => payload);

const initialState = {
  user: "",
  isLoggedIn: false,
  socialAuthResult: null,
  isSocial: false,
};

export const actionCreators = {
  loginSuccess,
  socialSuccess
};

export default handleActions({
  [LOGIN_SUCCESS]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.user = action.payload;
      draft.isLoggedIn = true;
    });
  },
  [SOCIAL_SUCCESS]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.socialAuthResult = action.payload;
      draft.isSocial = true;
    });
  }
}, initialState);