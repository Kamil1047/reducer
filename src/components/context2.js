import React from "react";
import { ChannelContext, UserContext } from "../App";

const Context2 = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(name) => {
          return (
            <ChannelContext.Consumer>
              {(surname) => {
                return (
                  <div>
                    <div>My Name is:{name}</div>;
                    <div>My Surname is:{surname}</div>;
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default Context2;
