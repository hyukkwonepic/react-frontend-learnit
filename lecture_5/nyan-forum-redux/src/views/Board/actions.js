import { db } from '../../firebase';
import {
  FETCH_BOARDS_REQUEST,
  FETCH_BOARDS_SUCCESS
} from './actionTypes';

const fetchBoardsRequest = () => {
  return {
    type: FETCH_BOARDS_REQUEST
  }
}

const fetchBoardsSuccess = (payload) => {
  return {
    type: FETCH_BOARDS_SUCCESS,
    payload
  }
}

export const fetchBoards = () => {
  return async (dispatch) => {
    dispatch(fetchBoardsRequest());
    const boardsSnapshot = await db.collection('boards').get();
    const boards = boardsSnapshot.docs.map((snapshot) => {
      return snapshot.data();
    });
    dispatch(fetchBoardsSuccess(boards));
  }
}