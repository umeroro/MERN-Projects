function Student({ name, progress, updateProgress }) {
  return (
    <div>
      <h1>Student Detail</h1>
      <h3>{name}</h3>
      <p>Progress: {progress}</p>
      <button onClick={() => updateProgress(name)}>Increase Progress</button>
    </div>
  );
}

export default Student;