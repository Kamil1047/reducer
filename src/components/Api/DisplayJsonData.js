import React from "react";
export default function DisplayJsonData({ data }) {
  return (
    <div>
      <h2>UserID: {data.id}</h2>
      <h5>Title: {data.title}</h5>
      <h5>Completed: {data.completed.toString()}</h5>
    </div>
  );
}
