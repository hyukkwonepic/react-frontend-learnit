import {
  FETCH_BOARDS_REQUEST,
  FETCH_BOARDS_SUCCESS
} from './actionTypes';

const initialState = {
  isLoading: false,
  boards: []
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BOARDS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_BOARDS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        boards: payload,
      }
    }
    default: return state;
  }
}