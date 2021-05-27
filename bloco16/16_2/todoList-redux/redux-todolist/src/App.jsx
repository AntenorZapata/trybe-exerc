import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, completeTodo, progressTodo } from './actions';
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
    this.handlerAll = this.handlerAll.bind(this);
    this.handleFilterTotal = this.handleFilterTotal.bind(this);

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
    this.setState({ todoValue: '', filter: '' });
  }

  handleFilterAll() {
    const { todos } = this.props;
    const { filter } = this.state;
    if (filter === 'completed') {
      const filtered = todos.filter((item) => item.complete === true);
      if (filtered.length) {
        return filtered;
      }
      return todos;
    } else if (filter === 'progress') {
      const filtered = todos.filter((item) => item.progress === true);
      if (filtered.length) {
        return filtered;
      }
      return todos;
    }
  }

  handlerAll({ target }) {
    const { value } = target;
    this.setState({ filter: value });
  }

  render() {
    const { todos } = this.props;
    const { filter } = this.state;
    const tasks =
      filter === '' || filter === 'all' ? todos : this.handleFilterAll();

    return (
      <div className="App">
        <div className="filters">
          <h4>FIltros:</h4>
          <button value="all" onClick={(e) => this.handlerAll(e)}>
            All
          </button>
          <button value="completed" onClick={(e) => this.handlerAll(e)}>
            Concluidas
          </button>
          <button value="progress" onClick={(e) => this.handlerAll(e)}>
            In Progress
          </button>
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
          {tasks.map((item, index) => (
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
  allTodos: state.todoList.allTodos,
  completed: state.todoList.completed,
  progress: state.todoList.progress,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    completeTodo: (todo) => dispatch(completeTodo(todo)),
    progressTodo: (todo) => dispatch(progressTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
