import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PostItem from '../../components/PostItem';
import Comments from '../../components/Comments';

import { fetchPostDetail } from './action';

class PostDetail extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const { postId } = match.params;
    dispatch(fetchPostDetail(postId));
  }

  render() {
    const { post, comments } = this.props;
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

const mapStateToProps = (state) => {
  return {
    post: state.postDetail.post,
    comments: state.postDetail.comments,
  }
}

export default connect(mapStateToProps)(PostDetail);