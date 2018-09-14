import React from 'react';
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
              // const isActive = id === activeBoardId;
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


export default withRouter(Navbar);