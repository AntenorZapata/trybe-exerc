import React, { Component } from 'react';
import { registerUser } from '../actions/actions';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      password: '',
      email: '',
      redirect: false,
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
    const { email, password } = this.state;
    this.props.registerUser(email, password);
    this.setState({ redirect: true });
  }

  render() {
    const { password, email, redirect } = this.state;
    if (redirect) return <Redirect to="/login" />;

    return (
      <div>
        <h2>Registro de novo usuário</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              required
              name="email"
              value={email}
              onChange={this.handleInputValue}
              id="email"
              type="text"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              required
              name="password"
              value={password}
              onChange={this.handleInputValue}
              id="password"
              type="password"
            />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
        {/* <Link to="/customers">Clientes Cadastrados</Link> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newUsers: state.newUsers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (email, password) => dispatch(registerUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
