
import Footer from "./Footer";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Notes from "./Note";
import { useState } from "react";



function App() {
  const [notes,setNotes]=useState([]);
   function onDelete(index){
  
  setNotes(()=>notes.filter((noteItem,id)=>{return(id!==index ) }));
  console.log( {index})
  }
  function AddContent(note){
   setNotes(()=>{return[...notes,note]})
   
  }
  
  
  return (
    <div className="App">
   
      <Header/>
      <CreateArea
        AddContent={AddContent}
      />
      {notes.map((noteItem,index)=>{return(<Notes key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={onDelete} />)})}
      
      <Footer/>
     
    </div>
  );
  
}

export default App;
