import React, { Component } from "react";
import Hello from "./hello";

const arr = ["Estudar React", "Estudar REact", "Estudar React"];

export default class App extends Component {
  task = (value) => {
    return <li>{value}</li>;
  };

  render() {
    return (
      <div>
        {this.task("Iniciando em React")}

        {arr.map((i) => {
          return this.task(i);
        })}
      </div>
    );
  }
}
