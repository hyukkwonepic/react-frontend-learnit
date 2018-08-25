import React from "react";

class TodoList extends React.Component {
  handleDelete = value => {
    this.props.onDelete(value);
  };
  render() {
    const { list } = this.props;
    return list.map((item, index) => {
      return (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => this.handleDelete(item)}>삭제</button>
        </div>
      );
    });
  }
}

export default TodoList;
