import React, { useState } from "react";

const Studentform = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [progress, setProgress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, age: parseInt(age), progress: parseInt(progress) });
    setName("");
    setAge("");
    setProgress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="number"
        placeholder="Progress"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default Studentform;
