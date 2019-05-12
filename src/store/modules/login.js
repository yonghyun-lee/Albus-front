import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';

// {
//   'type': 'user/LOGIN_SUCCESS',
//   payload: payload
// }
const loginSuccess = createAction(LOGIN_SUCCESS, (payload) => payload);

const initialState = {
  user: "",
  isLoggedIn: false,
};

export const actionCreators = {
  loginSuccess,
};

export default handleActions({
  [LOGIN_SUCCESS]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.user = action.payload;
      draft.isLoggedIn = true;
    });
  }
}, initialState);