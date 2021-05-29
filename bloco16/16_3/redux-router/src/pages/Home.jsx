import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Faça seu login: </h2>
        <Link to="/login">Login</Link>
        <h2>Cadastre-se </h2>
        <Link to="/registerNewUser">fazer meu cadastro</Link>
      </div>
    );
  }
}
