import React from 'react';
import styled from 'styled-components';
import Info from '../Info';
import Input from '../Input';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      pokemon: {}
    }
  }

  async componentDidMount() {
    try {
      const value = 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
      if (response.status >= 400) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      this.setState({
        pokemon: data
      });
    } catch (e) {
      console.error(e);
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  handleSearch = async () => {
    try {
      const { value } = this.state;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
      if (response.status >= 400) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      this.setState({
        pokemon: data
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { value, pokemon } = this.state;
    return (
      <Wrapper>
        <Info pokemon={pokemon} />
        <Input
          value={value}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
        />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 30px;
  font-family: sans-serif;
`;

export default Main;