import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_REGISTER_FORM = 'register/CHANGE_REGISTER_FORM';
const SET_EMAIL = 'register/SET_EMAIL';
const SET_ERROR = 'register/SET_ERROR';

const changeRegisterForm = createAction(CHANGE_REGISTER_FORM, (payload) => payload);
const setEmail = createAction(SET_EMAIL, (payload) => payload);
const setError = createAction(SET_ERROR, (payload) => payload);

const initialState = {
  username: null,
  email: null,
  error: null
};

export const actionCreators = {
  changeRegisterForm,
  setEmail,
  setError
};

export default handleActions({
  [CHANGE_REGISTER_FORM]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.username = action.payload;
    });
  },
  [SET_EMAIL]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.email = action.payload;
    });
  },
  [SET_ERROR]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.error = action.payload;
    });
  },
}, initialState);