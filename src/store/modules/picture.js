// 카운터 관련 상태 로직
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입을 정의해줍니다.
const UPLOAD_PICTURE = 'picture/UPLOAD_PICTURE';
const MAKE_FORM_PICTURE = 'picture/MAKE_FORM_PICTURE';

// 액션 생성 함수를 만듭니다.
const uploadPicture = createAction(UPLOAD_PICTURE, (payload)=> payload);
const makeFormPicture = createAction(MAKE_FORM_PICTURE, (payload)=> payload);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  uploadState: false,
  uploadPicture: [],
  formPicture: []
};

export const actionCreators = {
  uploadPicture,
  makeFormPicture
};

export default handleActions({
  [UPLOAD_PICTURE]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;

      console.log("Gd");
      draft.uploadPicture.push(action.payload);
      draft.uploadState = true;
    });
  },
  [MAKE_FORM_PICTURE]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;

      console.log("asdg");
      draft.formPicture = action.payload;
    });
  },
}, initialState);