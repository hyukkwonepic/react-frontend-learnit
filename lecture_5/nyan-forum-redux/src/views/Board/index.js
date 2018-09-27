import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import PostList from '../PostList';
import PostCreate from '../PostCreate';
import PostDetail from '../PostDetail';
import CommentCreate from '../CommentCreate';
import { db } from '../../firebase';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      boards: [],
    }
  }

  async componentDidMount() {
    const boardsSnapshot = await db.collection('boards').get();
    const boards = boardsSnapshot.docs.map((snapshot) => {
      return snapshot.data();
    });
    const activeBoardId = boards[0].id;
    this.setState({
      boards,
    }, () => {
      this.props.history.push(`/board/${activeBoardId}`);
    });
  }

  render() {
    const { match } = this.props;
    const { boards } = this.state;

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

export default Board;