import React, { Component } from 'react';
import { GrAddCircle } from 'react-icons/gr';

export default class InputTodo extends Component {
  render() {
    const { handleValue, handleSubmitTodo, todoValue } = this.props;
    return (
      <div>
        <div className="input-btn">
          <input value={todoValue} type="text" onChange={handleValue} />
          <GrAddCircle
            className="add-todo-btn"
            type="button"
            onClick={handleSubmitTodo}
          >
            AddTodo
          </GrAddCircle>
        </div>
      </div>
    );
  }
}
