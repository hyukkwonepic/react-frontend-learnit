import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from './actionTypes';

const initialState = {
  isLoading: false,
  posts: []
}

export const reducer = (state = initialState, action) => {
  const { type } = action;

  switch(type) {
    case FETCH_POSTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        posts: [],
      }
    }
    case FETCH_POSTS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        posts: payload
      }
    }
    default: return state;
  }
}