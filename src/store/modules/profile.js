// 카운터 관련 상태 로직
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입을 정의해줍니다.
const OPEN = 'profile/OPEN';
const CLOSE = 'profile/CLOSE';

// 액션 생성 함수를 만듭니다.
const open = createAction(OPEN);
const close = createAction(CLOSE);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  open: false
};

export const actionCreators = {
  open,
  close
};

export default handleActions({
  [OPEN]: (state, action) => {
    return produce(state, (draft) => {
      draft.open = true;
    });
  },
  [CLOSE]: (state, action) => {
    return produce(state, (draft) => {
      draft.open = false;
    });
  }
}, initialState);