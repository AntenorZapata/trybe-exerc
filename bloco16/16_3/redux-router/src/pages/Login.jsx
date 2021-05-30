import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValueInput = this.handleValueInput.bind(this);

    this.state = {
      email: '',
      password: '',
      redirect: false,
      notFound: false,
      notMatch: false,
    };
  }

  handleValueInput({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleReturn() {
    return <h2>Usuário não cadastrado</h2>;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { newUsers } = this.props;
    const user = newUsers.find((user) => user.email === email);
    if (user) {
      if (user.password === password) {
        this.setState({ redirect: true });
        this.props.login();
      }
      this.setState({ notMatch: true });
    }
    this.setState({ notFound: true });
  }

  render() {
    const { redirect, notFound, notMatch } = this.state;
    if (redirect) return <Redirect to="/customers" />;
    return (
      <div>
        <h2>Faça seu Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              required
              onChange={this.handleValueInput}
              name="email"
              id="email"
              type="email"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              required
              onChange={this.handleValueInput}
              type="password"
              id="password"
              name="password"
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
        {notMatch ? (
          <h3>Email ou senha incorretos</h3>
        ) : (
          notFound && (
            <div>
              <h3>Usuário não encontrado</h3>
              <Link to="/newuser">Registre-se</Link>
            </div>
          )
        )}
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newUsers: state.newUsers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
