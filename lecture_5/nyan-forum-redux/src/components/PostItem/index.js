import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class PostItem extends React.Component {
  handleClick = () => {
    const { history, match, post, isDetail } = this.props;
    if (!isDetail) {
      history.push(`${match.url}/${post.id}`);
    }
  }
  
  render() {
    const { post, isDetail } = this.props;
    const { id, author, title, content, comments } = post;
    return (
      <Wrapper isDetail={isDetail} onClick={this.handleClick}>
        <Author>
          <span>{author}</span>
        </Author>
        <Title>
          <span>{title}</span>
        </Title>
        <Content>
          {content}
        </Content>
        {
          isDetail ? null : (
            <CommentCount>
              <span>댓글 {comments.length}개</span>
            </CommentCount>
          )
        }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 3rem;
  width: 100%;
  margin-bottom: 2rem;
  cursor: ${(props) => props.isDetail ? 'initial' : 'pointer'};
`;

const Author = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #333;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #333;
`;

const Content = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: #333;
`;

const CommentCount = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: #999;
`;

export default withRouter(PostItem);