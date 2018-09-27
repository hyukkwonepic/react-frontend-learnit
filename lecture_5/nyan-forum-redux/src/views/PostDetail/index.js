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

  async componentDidMount() {
    const { postId } = this.props.match.params;
    const postSnapshot = await db.collection('posts').doc(postId).get();
    const post = postSnapshot.data();

    const commentsPromises = post.comments.map(async (commentId) => {
      const commentSnapshot = await db.collection('comments').doc(commentId).get();
      return commentSnapshot.data();
    });

    const comments = await Promise.all(commentsPromises);

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