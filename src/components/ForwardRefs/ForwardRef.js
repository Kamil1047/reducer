import React from "react";

const Forwardref = () => {
  const ref = React.createRef();

  const Focus = () => {
    ref.current.focus();
  };
  return (
    <div>
      <input ref={ref} />
      <button onClick={Focus}>Focus on Input</button>
    </div>
  );
};

export default Forwardref;
