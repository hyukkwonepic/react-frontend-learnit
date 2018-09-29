import { db } from '../../firebase';
import {
  FETCH_POST_DETAIL_REQUEST,
  FETCH_POST_DETAIL_SUCCESS,
} from './actionTypes';

const fetchPostDetailRequest = () => {
  return {
    type: FETCH_POST_DETAIL_REQUEST
  }
}

const fetchPostDetailSuccess = (payload) => {
  return {
    type: FETCH_POST_DETAIL_SUCCESS,
    payload
  }
}

export const fetchPostDetail = (postId) => {
  return async (dispatch) => {
    dispatch(fetchPostDetailRequest());
    const postSnapshot = await db.collection('posts').doc(postId).get();
    const post = postSnapshot.data();

    const commentsPromises = post.comments.map(async (commentId) => {
      const commentSnapshot = await db.collection('comments').doc(commentId).get();
      return commentSnapshot.data();
    });

    const comments = await Promise.all(commentsPromises);
    dispatch(fetchPostDetailSuccess({
      post,
      comments
    }));
  }
}