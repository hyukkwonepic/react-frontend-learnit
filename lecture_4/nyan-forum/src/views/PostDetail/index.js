import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import PostItem from '../../components/PostItem';
import Comments from '../../components/Comments';

class PostDetail extends React.Component {

  state = {
    post: {},
    comments: []
  }

  // CDM에서 post와 comments 데이터 가져오기
  async componentDidMount() {
    // 현재 url의 postId를 가져옵니다
    const { postId } = this.props.match.params;

    // postId를 통해 해당 post데이터를 가져옵니다
    const postSnapshot = await db.collection('posts').doc(postId).get();
    const post = postSnapshot.data(); // data() 메소드를 통해 snapshot의 데이터를 자바스크립트 객체로 변환합니다

    // post.comments를 통해 각각의 comment 데이터를 가져옵니다
    const commentsPromises = post.comments.map(async (commentId) => {
      // comments 컬렉션의 commentId에 해당하는 document를 가져옵니다 => documentSnapshot이 반환됩니다
      const commentSnapshot = await db.collection('comments').doc(commentId).get();
      return commentSnapshot.data();
    });

    // Promise.all을 활용하여 모든 요청이 완료될 때까지 기다린 후, 완료시 데이터들을 comments에 할당합니다
    const comments = await Promise.all(commentsPromises);

    // 가져온 post와 comments 데이터를 state에 저장합니다
    this.setState({
      post,
      comments
    });
  }

  render() {
    const { post, comments } = this.state;
    if (Object.keys(post).length !== 0) {
      return (
        <Wrapper>
          <PostItem isDetail post={post} />
          <Comments comments={comments} />
        </Wrapper>
      );
    }

    return null;
  }
}

const Wrapper = styled.div`
  width: 100%;
`;

export default PostDetail;