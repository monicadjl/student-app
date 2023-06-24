import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import Student from './components/Student';
import React from 'react'
import { useState } from 'react';
import NewStudentForm from './components/NewStudentForm';

function App() {

  const addStudentData = newStudent => {
    // Duplicate the student list
    const newStudentList = [...studentData];

    // Logic to generate the next valid student ID
    const nextId = Math.max(...newStudentList.map(student => student.id)) + 1;

    newStudentList.push({
        id: nextId,
        nameData: newStudent.nameData,
        emailData: newStudent.emailData,
        isPresentData: false,
    });

    setStudentData(newStudentList);
};
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: 'Ada',
      emailData: 'ada@dev.org',
      isPresentData: false
    },
    {
      id: 2,
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org',
      isPresentData: false
    },
    {
      id: 3,
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org',
      isPresentData: true
    }
  ]);

  const updateStudentData = updatedStudent => {
    const students = studentData.map(student => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });

    setStudentData(students);
  };

  return (
    <main>
        <h1>Attendance</h1>
        <ClassInfo memberCount={studentData.length}></ClassInfo>
        <StudentList
            students={studentData}
            onUpdateStudent={updateStudentData}
        ></StudentList>
        <NewStudentForm
            addStudentCallback={addStudentData}
        ></NewStudentForm>
    </main>
);

};


export default App;
