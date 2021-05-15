import { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Counter.module.css';

class CounterClass extends Component {

  constructor() {
    super();
    this.incrementHandler.bind(this);
    this.decrementHandler.bind(this);
    this.toggleCounterHandler.bind(this);
  }

  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {

  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment '}),
    decrement: () => dispatch({ type: 'decrement '})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
