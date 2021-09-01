import React, { useReducer, useState } from "react";
// import FormReducer from "./FormReducer";

const initialFormState = {
  username: "",
  email: "",
  password: "",
};

const FormReducer = (state, action) => {
  switch (action.type) {
    case "Handle Input Text":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

const Form = () => {
  const [formState, dispatch] = useReducer(FormReducer, initialFormState);
  const [display, setDisplay] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setDisplay((prevData) => [...prevData, formState]);
    // document.reducerForm.reset();
    dispatch([]);
  };
  const handleTextChange = (e) => {
    dispatch({
      type: "Handle Input Text",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <form name="reducerForm" onSubmit={submitHandler}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={formState.userName}
              onChange={(e) => handleTextChange(e)}
              required
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={formState.email}
              onChange={(e) => handleTextChange(e)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="text"
              name="password"
              value={formState.password}
              onChange={(e) => handleTextChange(e)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {display.map((data, index) => (
        <div key={index}>
          <div>Username: {data.username}</div>
          <div>Email: {data.email}</div>
          <div>Password: {data.password}</div>
        </div>
      ))}
    </div>
  );
};

export default Form;
