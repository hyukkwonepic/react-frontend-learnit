import React from 'react';
import styled from 'styled-components';

import cat from '../../assets/cat.svg';

import Button from '../../components/Button';

class Landing extends React.Component {
  handleEnter = () => {
    this.props.history.push('/board');
  }
  render() {
    return (
      <Wrapper>
        <img src={cat} />
        <div>냥포럼</div>
        <Button onClick={this.handleEnter}>입장하기</Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    display: inline-block;
    width: 10rem;
    margin-bottom: 2rem;
  }

  div {
    font-size: 2.4rem;
    font-weight: 800;
    color: #333;
    margin-bottom: 3.5rem;
  }
`;

export default Landing;