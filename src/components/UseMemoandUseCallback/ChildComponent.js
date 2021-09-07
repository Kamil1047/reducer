import React, { Fragment, memo } from "react";

const ChildComponent = ({ number, setNumber }) => {
  console.log("From child component");

  const onClickHandler = () => setNumber(number + 1);
  return (
    <Fragment>
      <h1>Child component {number}</h1>
      <button onClick={onClickHandler}>Up</button>
    </Fragment>
  );
};

export default memo(ChildComponent);
