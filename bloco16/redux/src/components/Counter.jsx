import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  handlerIncrement() {
    this.props.increment();
  }

  handlerDecrement() {
    this.props.decrement();
  }
  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.handlerIncrement.bind(this)}>INcrement</button>
        <button onClick={this.handlerDecrement.bind(this)}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment', payload: 1 }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
