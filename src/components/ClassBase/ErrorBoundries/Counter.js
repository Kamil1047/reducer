import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 6) {
      throw new Error("page Crashed");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default Counter;
