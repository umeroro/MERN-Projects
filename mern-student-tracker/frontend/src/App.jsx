import React, { useEffect, useState } from "react";
import Student from "./components/Student";
import Studentform from "./components/Studentform";
import axios from "axios";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((res) => setStudents(res.data))
      .catch((error) => console.error(error));
  }, []);

  const addStudent = (student) => {
    axios
      .post("http://localhost:5000/students", student)
      .then(() => {
        setStudents([...students, student]);
      })
      .catch((err) => console.error(err));
  };

  const updateProgress = (name) => {
    const student = students.find((s) => s.name === name);
    const newProgress = student.progress + 5;
    axios
      .put(`http://localhost:5000/students/${name}`, { progress: newProgress })
      .then(() => {
        setStudents(
          students.map((s) =>
            s.name === name ? { ...s, progress: newProgress } : s
          )
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Student Progress Tracker</h1>
      <Studentform addStudent={addStudent} />
      {students.map((student) => (
        <Student
          key={student.name}
          name={student.name}
          age={student.age}
          progress={student.progress}
        />
      ))}
    </div>
  );
};

export default App;
