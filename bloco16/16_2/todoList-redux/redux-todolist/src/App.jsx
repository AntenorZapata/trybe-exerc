import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  removeTodo,
  completeTodo,
  progressTodo,
  filterTodo,
} from './actions';
import { filterTodos } from './reducers/reducer';
import './App.css';
import { GrAddCircle } from 'react-icons/gr';
import { FaHourglassStart } from 'react-icons/fa';
import BtnsFilter from './components/BtnsFilter';
import InputTodo from './components/InputTodo';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleValue = this.handleValue.bind(this);
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this);

    this.state = {
      todoValue: '',
    };
  }

  handleValue({ target }) {
    this.setState({ todoValue: target.value });
  }

  handleSubmitTodo() {
    const { todoValue } = this.state;
    this.props.addTodo(todoValue);
    this.setState({ todoValue: '', filter: '' });
    this.props.filterTodo('all');
  }

  render() {
    const { todos } = this.props;
    const { todoValue } = this.state;

    return (
      <div className="App">
        <BtnsFilter filterFunc={this.props.filterTodo} />
        <InputTodo
          handleValue={this.handleValue}
          handleSubmitTodo={this.handleSubmitTodo}
          todoValue={todoValue}
        />
        <div className="todo-list-container">
          {todos.map((item, index) => (
            <ul key={index}>
              <div className={item.progress ? 'progress' : ''}>
                <li
                  onClick={() => this.props.completeTodo(item)}
                  className={item.complete ? 'completed' : ''}
                >
                  {item.task}
                </li>
              </div>
              <FaHourglassStart
                className="todo-progress"
                type="button"
                onClick={() => this.props.progressTodo(item)}
              ></FaHourglassStart>
            </ul>
          ))}
          <button type="button" onClick={() => this.props.removeTodo()}>
            LImpar Lista
          </button>
        </div>
        <div>
          <h4>Instruções</h4>
          <p>Click na task para marcar e desmarcar como concluida</p>
          <p>Click na ampulheta pra alternar tarefa "em progresso"</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: filterTodos(state.todoList.todos, state.todoList.filter),
  filter: state.todoList.filter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    completeTodo: (todo) => dispatch(completeTodo(todo)),
    progressTodo: (todo) => dispatch(progressTodo(todo)),
    filterTodo: (filter) => dispatch(filterTodo(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
