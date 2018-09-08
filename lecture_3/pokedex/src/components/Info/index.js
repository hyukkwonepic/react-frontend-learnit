import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Info extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemon !== this.props.pokemon && prevProps.pokemon.id !== undefined) {
      alert('새 포켓몬 데이터가 로드되었습니다.');
    }
  }

  render() {
    const { pokemon } = this.props;
    if (Object.keys(pokemon).length === 0) {
      return null;
    } else {
      const { id, sprites, name, weight } = pokemon;
      const images = Object.keys(sprites).map((key) => {
        const url = sprites[key];
        if (url) {
          return <img src={url} key={key} alt={key} />
        }
        
        return null
      }).filter(item => item !== null);
      return (
        <Wrapper>
          <h1>내 포켓몬</h1>
          {images}
          <Descriptions>
            <div>
              <strong>ID</strong>
              <span>{id}</span>
            </div>
            <div>
              <strong>이름</strong>
              <span>{name}</span>
            </div>
            <div>
              <strong>무게</strong>
              <span>{weight}</span>
            </div>
          </Descriptions>
        </Wrapper>
      );
    }

  }
}

const Wrapper = styled.div`
  h1 {
    font-size: 32px;
  }

  img {
    display: inline-block;
    border: 1px solid #eee;
    background-color: #fff;
  }
`;

const Descriptions = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;

  strong {
    margin-right: 10px;
    color: #333;
  }
`;

Info.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default Info;