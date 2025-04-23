import { useState } from "react";
import Student_copy from "./components/Student_copy";
import StudentFormcopy from "./components/StudentFormcopy";

const App_copy = () => {
  const [students, setStudent] = useState([]);

  return (
    <>
      <StudentFormcopy addStudent={addStudent} />
      {Map.students((student) => {
        <Student_copy
          key={student.name}
          name={student.name}
          progress={student.progress}
          updateProgress={student.progress}
        />;
      })}
    </>
  );
};

export default App_copy;
