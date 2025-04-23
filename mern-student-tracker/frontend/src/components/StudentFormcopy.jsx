import { useState } from "react";

const StudentFormcopy = ({addStudent}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [progress, setProgress] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    addStudent({name, age: parseInt(age), progress: parseInt(progress)})
    setAge('');
    setName('');
    setProgress('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="number"
        placeholder="progress"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentFormcopy;
