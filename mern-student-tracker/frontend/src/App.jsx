import { useState, useEffect } from "react";
import axios from "axios";
import Student from "./components/Student";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
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
    <div style={{ padding: "20px" }}>
      <h1>Student Progress Tracker</h1>
      <StudentForm addStudent={addStudent} />
      {students.map((student) => (
        <Student
          key={student.name}
          name={student.name}
          progress={student.progress}
          updateProgress={updateProgress}
        />
      ))}
    </div>
  );
}

export default App;
