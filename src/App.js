import './App.css'
import React from 'react';
const App = () => {
  const students = [
    { id: 1, name: 'Alice', grade: 'A', age: 20 },
    { id: 2, name: 'Bob', grade: 'B', age: 21 },
    { id: 3, name: 'Charlie', grade: 'A', age: 22 },
    { id: 4, name: 'David', grade: 'C', age: 19 },
    { id: 5, name: 'Eva', grade: 'B', age: 20 },
    { id: 6, name: 'Frank', grade: 'A', age: 23 },
    { id: 7, name: 'Grace', grade: 'B', age: 21 },
    { id: 8, name: 'Hannah', grade: 'C', age: 22 },
    { id: 9, name: 'Ivan', grade: 'A', age: 20 },
    { id: 10, name: 'Jane', grade: 'B', age: 21 }
  ];

  return (
    <div style={{ padding: '20px' }} className='total'>
      <h2>Student Table</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;