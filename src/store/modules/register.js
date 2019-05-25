import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_REGISTER_FORM = 'register/CHANGE_REGISTER_FORM';
const SET_ERROR = 'register/SET_ERROR';

const changeRegisterForm = createAction(CHANGE_REGISTER_FORM, (payload) => payload);
const setError = createAction(SET_ERROR, (payload) => payload);

const initialState = {
  username: null,
  error: null
};

export const actionCreators = {
  changeRegisterForm,
  setError
};

export default handleActions({
  [CHANGE_REGISTER_FORM]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.username = action.payload;
    });
  },
  [SET_ERROR]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.error = action.payload;
    });
  },
}, initialState);