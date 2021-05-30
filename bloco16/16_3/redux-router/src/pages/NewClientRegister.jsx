import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerNewClient } from '../actions/actions';

class NewClientRegister extends Component {
  constructor(props) {
    super(props);

    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      nome: '',
      age: '',
      email: '',
    };
  }

  handleInputValue({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { nome, age, email } = this.state;
    this.props.registerNewClient(nome, age, email);
    this.setState({ nome: '', age: '', email: '' });
  }
  render() {
    const { isActive } = this.props;
    if (!isActive) {
      return (
        <div>
          <h2>Login não efetuado</h2>
          <Link to="/">Voltar</Link>
        </div>
      );
    }

    const { nome, age, email } = this.state;
    console.log(this.props.customers);

    return (
      <div>
        <h2>Registro de novo usuário</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nome">
            Nome
            <input
              required
              name="nome"
              value={nome}
              onChange={this.handleInputValue}
              id="nome"
              type="text"
            />
          </label>
          <label htmlFor="age">
            Idade
            <input
              required
              name="age"
              value={age}
              onChange={this.handleInputValue}
              id="password"
              type="number"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              required
              name="email"
              value={email}
              onChange={this.handleInputValue}
              id="email"
              type="email"
            />
          </label>
          <button type="submit">Cadastrar Novo Cliente</button>
        </form>
        <Link to="/customers">Voltar</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isActive: state.isActive,
  customers: state.customers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    registerNewClient: (name, age, email) =>
      dispatch(registerNewClient(name, age, email)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewClientRegister);
