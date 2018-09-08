import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { value, onChange, onSearch } = props;
  return (
    <Wrapper>
      <input
        value={value}
        onChange={onChange}
        placeholder="e.g., 34"
      />
      <button onClick={onSearch}>조회</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  input {
    height: 30px;
    width: 170px;
    padding: 10px 20px;
    margin: 0;
    border: 1px solid #eee;
    border-radius: 3px;
    font-size: 20px;
    vertical-align: middle;
    margin-right: 10px;
  }

  button {
    height: 52px;
    width: 70px;
    background-color: #333;
    color: #fff;
    border-radius: 3px;
    border: 0px;
    vertical-align: middle;
    font-size: 20px;
    cursor: pointer;
  }
`;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default Input;