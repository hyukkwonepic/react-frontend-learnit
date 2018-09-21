import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

import PostItem from '../../components/PostItem';

class PostList extends React.Component {

  state = {
    posts: []
  }

  // CDM에서 board의 posts 데이터 가져오기
  async componentDidMount() {
    // 현재 url의 boardId를 가져옵니다
    const { boardId } = this.props.match.params;

    // boardId를 통해 db의 boards 컬렉션에서 해당 document를 가져옵니다 => documentSnapshot이 반환됩니다
    const boardSnapshot = await db.collection('boards').doc(boardId).get();
    const board = boardSnapshot.data(); // data() 메소드를 통해 snapshot의 데이터를 자바스크립트 객체로 변환합니다

    // board.posts를 통해 각각의 post 데이터를 가져옵니다
    const postPromises = board.posts.map(async (postId) => {
      // posts 컬렉션의 postId에 해당하는 document를 가져옵니다 => documentSnapshot이 반환됩니다
      const postSnapshot = await db.collection('posts').doc(postId).get();
      return postSnapshot.data(); // data() 메소드를 통해 snapshot의 데이터를 자바스크립트 객체로 변환합니다
    });

    // Promise.all을 활용하여 모든 요청이 완료될 때까지 기다린 후, 완료시 데이터들을 posts에 할당합니다
    const posts = await Promise.all(postPromises); 

    // 불러온 posts 데이터를 state에 저장합니다
    this.setState({
      posts
    });
  }

  // CDU에서 활성화된 게시판이 변경되었을 때 새 posts 데이터 가져오기
  async componentDidUpdate(prevProps, prevState) {
    // prevProps(이전 props)의 boardId와 this.props(현재 props)의 boardId를 비교합니다
    // boardId가 변경되었을 때만 다음 로직을 실행합니다.
    if (prevProps.match.params.boardId !== this.props.match.params.boardId) {

      // state의 현재 posts 데이터를 초기화합니다
      this.setState({
        posts: []
      });

      // 이하 로직은 componentDidMount과 같습니다.
      const { boardId } = this.props.match.params;

      const boardSnapshot = await db.collection('boards').doc(boardId).get();
      const board = boardSnapshot.data();
  
      const postsPromises = board.posts.map(async (postId) => {
        const postSnapshot = await db.collection('posts').doc(postId).get();
        return postSnapshot.data();
      });
      const posts = await Promise.all(postsPromises);
  
      this.setState({
        posts
      });
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <Wrapper>
        {posts.map((post) => {
          return (
            <PostItem key={post.id} post={post} />
          );
        })}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
`;

export default PostList;