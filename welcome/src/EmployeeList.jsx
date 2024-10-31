// src/EmployeeList.jsx
import React from 'react';

const EmployeeList = () => {
  const employees = [
    { name: 'John Doe', role: 'Software Engineer', salary: 60000 },
    { name: 'Jane Smith', role: 'Project Manager', salary: 45000 },
    { name: 'Mike Johnson', role: 'Designer', salary: 70000 },
    { name: 'Emily Davis', role: 'Data Analyst', salary: 48000 },
    { name: 'Chris Brown', role: 'DevOps Engineer', salary: 55000 },
  ];

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index} style={{ color: employee.salary > 50000 ? 'green' : 'red' }}>
            {employee.name} - {employee.role} - ${employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
