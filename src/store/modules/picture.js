// 카운터 관련 상태 로직
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입을 정의해줍니다.
const UPLOAD_PICTURE = 'picture/UPLOAD_PICTURE';

// 액션 생성 함수를 만듭니다.
const uploadPicture = createAction(UPLOAD_PICTURE, (payload)=> payload);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  uploadPicture: []
};

export const actionCreators = {
  uploadPicture
};

export default handleActions({
  [UPLOAD_PICTURE]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.uploadPicture = action.payload;
    });
  }
}, initialState);