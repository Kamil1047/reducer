import React from "react";
export default function DisplayJsonData({ data }) {
  return (
    <div>
      <p>UserID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed.toString()}</p>
    </div>
  );
}
