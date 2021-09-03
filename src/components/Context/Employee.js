import React, { useContext } from "react";
import { EmployeeContext } from "../../App";
import Employeesalary from "./EmployeeSalary";

const Employee = () => {
  let context = useContext(EmployeeContext);
  return (
    <React.Fragment>
      <h3>From Employee Component</h3>
      <div>Employee Id: {context.id}</div>
      <div>Employee Name: {context.name}</div>
      <div>Employee Name: {context.location}</div>
      <Employeesalary />
    </React.Fragment>
  );
};

export default Employee;
