import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleAdd = () => {
    const { value } = this.state;
    this.props.onAdd(value);
    this.setState({
      value: ""
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} onChange={this.handleChange} />
        <button onClick={this.handleAdd}>추가</button>
      </div>
    );
  }
}

export default TodoInput;
