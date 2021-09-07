import React, { Component } from "react";

export default class componentWillUnmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <React.Fragment>
        <p>{this.state.show ? <Child /> : null}</p>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Click me to toggle
        </button>
      </React.Fragment>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    console.log("This Component is unmounted");
    alert("This will unmount");
  }
  render() {
    return <React.Fragment>I am a child component</React.Fragment>;
  }
}
