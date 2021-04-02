import "./App.css";
import pokemons from "./data";
import React, { Component } from "react";
import Pokedex from "./Pokedex";

export default class App extends Component {
  render() {
    return (
      <div className="container-pokedex">
        <Pokedex data={pokemons} />
      </div>
    );
  }
}
