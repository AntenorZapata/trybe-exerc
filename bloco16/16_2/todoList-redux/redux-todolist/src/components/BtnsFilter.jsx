import React, { Component } from 'react';

export default class BtnsFilter extends Component {
  render() {
    const { filterFunc } = this.props;
    return (
      <div>
        <div className="filters">
          <h4>FIltros:</h4>
          <button value="all" onClick={(e) => filterFunc(e.target.value)}>
            All
          </button>
          <button value="completed" onClick={(e) => filterFunc(e.target.value)}>
            Concluidas
          </button>
          <button value="progress" onClick={(e) => filterFunc(e.target.value)}>
            In Progress
          </button>
        </div>
      </div>
    );
  }
}
