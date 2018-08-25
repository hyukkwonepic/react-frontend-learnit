import React from "react";

import TodoList from "../TodoList";
import TodoInput from "../TodoInput";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  handleDelete = value => {
    const newTodos = this.state.todos.filter(item => item !== value);
    this.setState({
      todos: newTodos
    });
  };

  handleAdd = value => {
    this.setState({
      todos: [...this.state.todos, value]
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoList list={todos} onDelete={this.handleDelete} />
        <TodoInput onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default Todo;
