import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

import PostItem from '../../components/PostItem';

class PostList extends React.Component {

  state = {
    posts: []
  }

  async componentDidMount() {
    const { boardId } = this.props.match.params;
    const boardSnapshot = await db.collection('boards').doc(boardId).get();
    const board = boardSnapshot.data();

    const postPromises = board.posts.map(async (postId) => {
      const postSnapshot = await db.collection('posts').doc(postId).get();
      return postSnapshot.data();
    });
    const posts = await Promise.all(postPromises);

    this.setState({
      posts
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.boardId !== this.props.match.params.boardId) {
      this.setState({
        posts: []
      });
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
    const { match } = this.props;
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