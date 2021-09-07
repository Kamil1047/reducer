import React, { useState } from "react";
import "./App.css";
import Employee from "./components/Context/Employee";
import Form from "./components/Reducers/Form";
import Jsonplaceholder from "./components/Api/JSONPlaceholder";
import ParentComponent from "./components/UseMemoandUseCallback/ParentComponent";
import Forwardref from "./components/ForwardRefs/ForwardRef";
import LifeCycle from "./components/ClassBase/LifeCycle";

export const EmployeeContext = React.createContext();

function App() {
  const [employee, setEmployee] = useState({
    id: 1,
    name: "Kamil",
    location: "Ahmedabad",
    salary: 20000,
  });
  return (
    <div className="App">
      <div>
        <h1>UseContext Example</h1>
        <EmployeeContext.Provider value={employee}>
          <Employee />
        </EmployeeContext.Provider>
      </div>
      <div>
        <br />
        <h1>UseReducer and UseEffect Example</h1>
        <Form />
      </div>
      <div>
        <br />
        <h1>UseMemo and UseCallBack Example</h1>
        <ParentComponent />
      </div>
      <div>
        <br />
        <h1>Forward Ref</h1>
        <Forwardref />
      </div>
      <div>
        <br />
        <h1>Fetch Data from API using UseEffect Hook</h1>
        <Jsonplaceholder />
      </div>
      <div>
        <div style={{ backgroundColor: "black", color: "white" }}>
          <h1>Class LifeCycle</h1>
        </div>
        <LifeCycle />
      </div>
    </div>
  );
}

export default App;
