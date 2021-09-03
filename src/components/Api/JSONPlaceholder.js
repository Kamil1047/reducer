import React, { useState, useEffect } from "react";
import Displayjsondata from "./DisplayJsonData";

const Jsonplaceholder = () => {
  const [JsonData, setJsonData] = useState(0);

  useEffect(() => {
    fetchJsonData();
  }, []);
  const fetchJsonData = async () => {
    let response = await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();
    setJsonData(response);
  };

  return (
    <div>
      {JsonData
        ? JsonData.map((data, index) => (
            <Displayjsondata data={data} key={index} />
          ))
        : ""}
    </div>
  );
};

export default Jsonplaceholder;
