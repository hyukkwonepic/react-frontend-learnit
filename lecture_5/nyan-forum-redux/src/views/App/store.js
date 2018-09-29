import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  reducer as boardReducer,
} from '../Board/reducer';
import {
  reducer as postListReducer,
} from '../PostList/reducer';
import {
  reducer as postDetailReducer,
} from '../PostDetail/reducer';

const reducer = combineReducers({
  board: boardReducer,
  postList: postListReducer,
  postDetail: postDetailReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;