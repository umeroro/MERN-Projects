const Student_copy = ({name, progress, updateProgress}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{progress}</p>
      <button onClick={()=> updateProgress(name)}>Increase Progress</button>
    </div>
  )
}

export default Student_copy
