import React, { useReducer, useState, useEffect } from "react";

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
      return { username: "", email: "", password: "" };
  }
};

const Form = () => {
  const [formState, dispatch] = useReducer(FormReducer, initialFormState);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    display.length > 0 && alert(" Form Submitted Successfully!!");
  }, [display]);
  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    setDisplay((prevData) => [...prevData, formState]);
    document.myForm.reset();
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
        <form name="myForm" onInvalid={handleTextChange} onSubmit={submitHandler}>
          <div>
            <label>Username: </label>
            <input
              
              type="text"
              name="username"
              onChange={(e) => handleTextChange(e)}
              required
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              
              type="email"
              name="email"
              onChange={(e) => handleTextChange(e)}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              
              type="password"
              name="password"
              onChange={(e) => handleTextChange(e)}
              required
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
