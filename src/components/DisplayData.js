import React from "react";
const Displaydata = ({ data }) => {
  return (
    <div>
      {data.map((data, index) => {
        return (
          <div key={index}>
            <div>Username: {data.username}</div>
            <div>Email: {data.email}</div>
            <div>Password: {data.password}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Displaydata;
