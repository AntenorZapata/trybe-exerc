import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/actions';
import { sortReducer } from '../reducers/index';
import { sort } from '../actions/actions';

class Registeredcustomers extends Component {
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
    const { customers, sorted } = this.props;
    console.log(customers);

    return (
      <div>
        {!customers.length ? (
          <div>
            <h4>Nenhum cliente cadastrado</h4>
          </div>
        ) : (
          <div>
            <h1>Clientes Cadastrados</h1>
            {customers.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.age}</p>
                <p>{item.email}</p>
                <button>X</button>
                <hr />
              </div>
            ))}
          </div>
        )}
        <div className="filters">
          <button onClick={() => this.props.sort()}>Ordenar</button>
        </div>
        <Link to="/newclient">Cadastrar CLiente</Link>
        <div>
          <Link to="/" onClick={() => this.props.login()}>
            Sair do Sistema
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isActive: state.isActive,
  customers: sortReducer(state.customers, state.sorted),
  sorted: state.sorted,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    sortReducer: () => dispatch(sortReducer()),
    sort: () => dispatch(sort()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registeredcustomers);
