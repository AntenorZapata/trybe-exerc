import './App.css';
import React, { Component } from 'react';
import states from './data';

const initialState = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estados: '',
  casa: false,
  ap: false,
  resumo: '',
  cargo: '',
  cargoDesc: '',
  mouseOver: 0,
  show: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = initialState;
  }

  handleStates({ target }) {
    const { name } = target;

    const value = target.type === 'radio' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleBlur() {
    const { cidade } = this.state;
    //USAR REGEX PRA VERIFICAR
    if (cidade.match(/^\d/)) {
      this.setState({ cidade: '' });
    }
  }
  handleEvent() {
    if (this.state.mouseOver < 1) {
      alert('Preencha com cuidado esta informação.');
      this.setState({ mouseOver: 1 });
    }
  }

  handleDiv() {
    return (
      <div>
        <p>Nome: {this.state.nome}</p>
        <p>Email: {this.state.email}</p>
        <p>CPF: {this.state.cpf}</p>
        <p>Endereço: {this.state.endereco}</p>
        <p>Cidade: {this.state.cidade}</p>
        <p>Estados: {this.state.estados}</p>
        <p>Moradia: {this.state.casa ? 'casa' : 'apartamento'}</p>
        <p>Resumo do Currículo: {this.state.resumo}</p>
        <p>Seu cardo: {this.state.cargo}</p>
        <p>Descrição do cargo: {this.state.cargoDesc}</p>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ show: true });
    this.handleDiv();
  }

  handleClear() {
    this.setState(initialState);
  }

  // Separar os inputs em funções pra diminuir o número de linhas do componente

  render() {
    return (
      <div>
        <div className="App">
          <form action="">
            <fieldset>
              <input
                placeholder="NOME"
                type="text"
                maxLength="40"
                style={{ textTransform: 'uppercase' }}
                required
                name="nome"
                onChange={this.handleStates.bind(this)}
                value={this.state.nome}
              />
              <input
                type="email"
                maxLength="50"
                required
                placeholder="Insira seu email"
                name="email"
                onChange={this.handleStates.bind(this)}
                value={this.state.email}
              />
              <input
                type="text"
                maxLength="11"
                required
                placeholder="Insira seu CPF"
                name="cpf"
                onChange={this.handleStates.bind(this)}
                value={this.state.cpf}
              />
              <input
                type="text"
                maxLength="200"
                placeholder="Insira seu endereço"
                required
                name="endereco"
                onChange={this.handleStates.bind(this)}
                value={this.state.endereco}
              />
              <input
                type="text"
                maxLength="28"
                required
                placeholder="Insira sua cidade"
                name="cidade"
                onChange={this.handleStates.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                value={this.state.cidade}
              />
              <select
                name="estados"
                id=""
                required
                onChange={this.handleStates.bind(this)}
                value={this.state.estados}
              >
                {states.map((state, index) => (
                  <option key={index}>{state}</option>
                ))}
              </select>
              <input
                type="radio"
                id="casa"
                name="casa"
                onChange={this.handleStates.bind(this)}
                value={this.state.casa}
              />
              <label htmlFor="case">Casa</label>
              <input
                type="radio"
                id="apartamento"
                name="ap"
                onChange={this.handleStates.bind(this)}
                value={this.state.ap}
              />
              <label htmlFor="apartamento">Apartamento</label>
            </fieldset>
            <fieldset>
              <textarea
                onChange={this.handleStates.bind(this)}
                name="resumo"
                id=""
                cols="30"
                rows="10"
                maxLength="1000"
                placeholder="Resumo do Currículo"
                required
                value={this.state.resumo}
              ></textarea>
              <input
                onChange={this.handleStates.bind(this)}
                placeholder="Qual o seu cargo?"
                maxLength="40"
                required
                name="cargo"
                onMouseEnter={this.handleEvent.bind(this)}
                value={this.state.cargo}
              ></input>
              <textarea
                onChange={this.handleStates.bind(this)}
                type="text"
                name="cargoDesc"
                id=""
                cols="30"
                rows="10"
                maxLength="500"
                placeholder="Descrição do cargo"
                value={this.state.cargoDesc}
              />
            </fieldset>
            <button type="button" onClick={this.handleSubmit}>
              Enviar
            </button>
            <button type="button" onClick={this.handleClear.bind(this)}>
              Limpar
            </button>
          </form>
        </div>
        {this.state.show ? this.handleDiv() : null}
      </div>
    );
  }
}

export default App;
