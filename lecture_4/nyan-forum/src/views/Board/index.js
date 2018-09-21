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

  // CDM에서 boards 데이터 가져오기
  async componentDidMount() {
    // boards 컬렉션 전부 가져오기 => snapshot을 반환합니다
    const boardsSnapshot = await db.collection('boards').get();
    
    // boards 컬렉션의 snapshot을 통해 각 document의 데이터를 boards 배열에 할당합니다
    const boards = boardsSnapshot.docs.map((snapshot) => {
      return snapshot.data();
    });

    // boards의 첫번째 항목의 id를 기억합니다
    const activeBoardId = boards[0].id;
    this.setState({
      // 불러온 boards 데이터를 state에 저장합니다
      boards,
    }, () => {
      // state가 전부 변경된 후, boards의 첫번째 항목의 post들이 보이도록 라우팅합니다
      // 동적 라우팅은 history.push() 메소드를 사용합니다
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
          {/* 좌측 네비게이션 바 오른쪽에 라우팅된 컴포넌트들을 렌더링합니다 */}
          <Switch>
            {/* :boardId, :postId 등을 path에 활용하여 router params를 활용합니다 */}
            {/* match.url은 현재 url을 나타냅니다 */}
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