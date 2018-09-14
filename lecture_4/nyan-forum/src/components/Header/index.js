import React from 'react';
import styled from 'styled-components';
import {
  withRouter,
  Link
} from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { pathname } = this.props.location;
    const postId = pathname.split('/')[3];
    const isCreate = pathname.includes('/create');
    return (
      <Wrapper>
        <Logo>
          <span>냥포럼</span>
        </Logo>
        <Action>
          {
            isCreate ? null : (
              <Link to={`${pathname}/create`}>
                <span>{postId ? '댓글 쓰기' : '글 쓰기'}</span>
              </Link>
            )
          }
        </Action>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  max-width: 1004px;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  color: #333;
`;

const Action = styled.div`
  font-size: 1.6rem;
  font-weight: bold;

  a {
    color: #333;
    text-decoration: none;
  }
`;

export default withRouter(Header);