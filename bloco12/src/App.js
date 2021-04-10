import './App.css';
import React, { Component } from 'react';
import Pokedex from './Components/Pokedex';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Pokedex />
      </div>
    );
  }
}
