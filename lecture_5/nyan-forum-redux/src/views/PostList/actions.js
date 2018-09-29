import { db } from '../../firebase';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from './actionTypes';

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}

const fetchPostsSuccess = (payload) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload
  }
}

export const fetchPosts = (boardId) => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    const boardSnapshot = await db.collection('boards').doc(boardId).get();
    const board = boardSnapshot.data();
    const postPromises = board.posts.map(async (postId) => {
      const postSnapshot = await db.collection('posts').doc(postId).get();
      return postSnapshot.data();
    });

    const posts = await Promise.all(postPromises);
    dispatch(fetchPostsSuccess(posts));
  }
}