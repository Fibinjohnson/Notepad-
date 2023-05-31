import React from "react";



  const  Notes = (props)=> {
    
  return (
    <div className="note">
      <h1> {props.id+1},{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default Notes;
 
