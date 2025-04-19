import React from 'react'

const Student = ({name , progress}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{progress}</p>
      <button onClick={()=> increaseProgress(name)}>Increase Progress</button>
    </div>
  )
}

export default Student
