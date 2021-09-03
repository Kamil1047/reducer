import React, { useContext } from "react";
import { EmployeeContext } from "../../App";

const Employeesalary = () => {
  let context = useContext(EmployeeContext);
  return (
    <React.Fragment>
      <h3>From Employee Component</h3>
      <div>Employee Id: {context.id}</div>
      <div>Employee Salary: {context.salary}</div>
    </React.Fragment>
  );
};

export default Employeesalary;
