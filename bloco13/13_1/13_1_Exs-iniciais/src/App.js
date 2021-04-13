import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caracters: [],
    };
  }

  fetchCharacteres = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ caracters: data.results });
      });
  };

  componentDidMount() {
    this.fetchCharacteres();
  }

  render() {
    const { caracters } = this.state;
    return (
      <div className='App'>
        <h1>Ricky and Morty:</h1>
        {caracters.map(({ name, image }) => {
          return (
            <div key={name}>
              <h1>{name}</h1>
              <img src={image}></img>
            </div>
          );
        })}
        {console.log(caracters)}
      </div>
    );
  }
}
