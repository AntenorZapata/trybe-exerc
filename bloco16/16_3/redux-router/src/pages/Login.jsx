import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      redirect: false,
    };
  }

  handleValueInput({ target }) {
    const { newUsers } = this.props;
    
  }

  handleSubmit() {}

  render() {
    const { redirect } = this.state;
    if (redirect) <Redirect to="/customers" />;
    return (
      <div>
        <h2>Faça seu Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email
            <input onChange={this.handleValueInput} id="email" type="email" />
          </label>
          <label htmlFor="password">
            Senha
            <input
              onChange={this.handleValueInput}
              type="password"
              id="password"
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newUsers: state.newUsers,
});

export default connect(mapStateToProps, null)(Login);
