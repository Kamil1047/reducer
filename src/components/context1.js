import React, { useContext } from "react";
// import Context2 from "./context2";
import { UserContext, ChannelContext } from "../App";
const Contect1 = () => {
  const name = useContext(UserContext);
  const surname = useContext(ChannelContext);
  return (
    <div>
      {name} - {surname}
    </div>
  );
};

export default Contect1;
