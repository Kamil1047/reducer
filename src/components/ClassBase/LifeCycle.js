import React, { Component } from "react";
import Constructor from "./Mounting/Constructor";
import GetDerivedStateFromProps from "./Mounting/getDerivedStateFromProps";
import Render from "./Mounting/Render";
import ComponentDidMount from "./Mounting/ComponentDidMount";
import ShouldComponentUpdate from "./Updating/ShouldComponentUpdate";
import GetSnapshotBeforeUpdate from "./Updating/GetSnapshotBeforeUpdate";
import ComponentDidUpdate from "./Updating/ComponentDidUpdate";
import ComponentWillUnmount from "./Unmounting/ComponentWillUnmount";
import ErrorBoundry from "./ErrorBoundries/ErrorBoundries";
import Counter from "./ErrorBoundries/Counter";

class LifeCycle extends Component {
  render() {
    return (
      <React.Fragment>
        <hr />
        <h1>Mounting</h1>
        <hr />
        <h2>constructor Method</h2>
        <Constructor />
        <h2>getDerivedStateFromProps Method</h2>
        <GetDerivedStateFromProps />
        <h2>render Method</h2>
        <Render />
        <h2>componentDidMount Method</h2>
        <ComponentDidMount />
        <hr />
        <h1>Updating</h1>
        <hr />
        <h2>shouldComponentUpdate Method</h2>
        <ShouldComponentUpdate />
        <h2>getSnapshotBeforeUpdate Method</h2>
        <GetSnapshotBeforeUpdate />
        <h2>componentDidUpdate Method</h2>
        <ComponentDidUpdate />
        <hr />
        <h1>Unmounting</h1>
        <hr />
        <h2>componentWillUnmount Method </h2>
        <ComponentWillUnmount />
        <h1>Error Boundries</h1>
        <ErrorBoundry>
          <Counter />
        </ErrorBoundry>
      </React.Fragment>
    );
  }
}

export default LifeCycle;
