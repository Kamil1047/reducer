import React, { Component } from "react";

class Errorboundries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went worng!!</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default Errorboundries;
