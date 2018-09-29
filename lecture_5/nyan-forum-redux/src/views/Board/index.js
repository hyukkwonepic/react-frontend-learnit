import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import PostList from '../PostList';
import PostCreate from '../PostCreate';
import PostDetail from '../PostDetail';
import CommentCreate from '../CommentCreate';

import { fetchBoards } from './actions';

class Board extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(fetchBoards());
    this.activateFirstBoard();
  }

  activateFirstBoard = () => {
    const { boards, history } = this.props;
    const firstBoardId = boards[0].id;
    history.push(`/board/${firstBoardId}`);
  }

  render() {
    const { match, boards } = this.props;
    return (
      <div>
        <Header />
        <Contents>
          <Navbar boards={boards} />
          <Switch>
            <Route path={`${match.url}/:boardId`} exact component={PostList} />
            <Route path={`${match.url}/:boardId/create`} exact component={PostCreate} />
            <Route path={`${match.url}/:boardId/:postId`} exact component={PostDetail} />
            <Route path={`${match.url}/:boardId/:postId/create`} exact component={CommentCreate} />
          </Switch>
        </Contents>
      </div>
    );
  }
}

const Contents = styled.div`
  max-width: 1004px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const mapStateToProps = (state) => {
  return {
    isLoading: state.board.isLoading,
    boards: state.board.boards
  }
}

export default connect(mapStateToProps)(Board);