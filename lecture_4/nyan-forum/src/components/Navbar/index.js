import React from 'react';
// <Router />로 렌더링 되지 않는 컴포넌트는 history에 접근할 수 없기 때문에 withRouter를 활용합니다
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends React.Component {
  render() {
    const { boards, location } = this.props;
    const { pathname } = location;
    return (
      <Wrapper>
        <ul>
          {
            boards.map((board) => {
              const { id, name } = board;
              // 현재 pathname과 id를 비교하여 활성화 여부를 판단합니다.
              const isActive = pathname.includes(`/board/${id}`);
              return (
                <List key={id} isActive={isActive}>
                  <Link to={`/board/${id}`}>{`# ${name}`}</Link>
                </List>
              );
            })
          }
        </ul>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 24rem;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const List = styled.li`
  margin-bottom: 2rem;
  a {
    color: ${(props) => props.isActive ? '#333' : '#999'};
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

// Navbar 컴포넌트를 withRouter로 감쌉니다
export default withRouter(Navbar);