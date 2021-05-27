import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  removeTodo,
  completeTodo,
  progressTodo,
  // filterComplted,
  // filterInProgress,
  // filterAll,
} from './actions';
import './App.css';
import { GrAddCircle } from 'react-icons/gr';
import { FaHourglassStart } from 'react-icons/fa';
import { v1 as uuidv1 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleValue = this.handleValue.bind(this);
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
    this.handleFilterAll = this.handleFilterAll.bind(this);
    this.handleComplted = this.handleComplted.bind(this);
    this.handleInProgress = this.handleInProgress.bind(this);
    this.handlerAll = this.handlerAll.bind(this);

    this.state = {
      todoValue: '',
      filter: '',
    };
  }

  handleValue({ target }) {
    this.setState({ todoValue: target.value });
  }

  handleSubmitTodo() {
    const { todoValue } = this.state;

    const todoObj = {
      id: uuidv1(),
      task: todoValue,
      complete: false,
      progress: false,
    };
    this.props.addTodo(todoObj);
    this.setState({ todoValue: '' });
  }

  handleFilterAll() {
    const { todos } = this.props;
    const { filter } = this.state;
    if (todos.length) {
      if (!filter) {
        return todos;
      } else if (filter === 'completed') {
        return todos.filter((item) => item.complete === true);
      }
      return todos.filter((item) => item.progress === true);
    }
    return todos;
  }

  handleComplted() {
    const { todos } = this.props;
    const filtered = todos.filter((item) => item.complete === true);
    if (filtered.length) {
      this.setState({ filter: 'completed' });
    }
  }

  handleInProgress() {
    const { todos } = this.props;
    const filtered = todos.filter((item) => item.progress === true);
    if (filtered.length) {
      this.setState({ filter: 'progress' });
    }
  }

  handlerAll() {
    this.setState({ filter: '' });
  }

  render() {
    const todos = this.handleFilterAll();
    console.log(todos);

    return (
      <div className="App">
        <div className="filters">
          <h4>FIltros:</h4>
          <button onClick={() => this.handlerAll()}>All</button>
          <button onClick={() => this.handleComplted()}>Concluidas</button>
          <button onClick={() => this.handleInProgress()}>In Progress</button>
        </div>
        <div className="input-btn">
          <input
            value={this.state.todoValue}
            type="text"
            onChange={this.handleValue}
          />
          <GrAddCircle
            className="add-todo-btn"
            type="button"
            onClick={this.handleSubmitTodo}
          >
            AddTodo
          </GrAddCircle>
        </div>
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
  todos: state.todoList.todos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    completeTodo: (todo) => dispatch(completeTodo(todo)),
    progressTodo: (todo) => dispatch(progressTodo(todo)),
    // filterComplted: () => dispatch(filterComplted()),
    // filterInProgress: () => dispatch(filterInProgress()),
    // filterAll: (todos) => dispatch(filterAll(todos)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
