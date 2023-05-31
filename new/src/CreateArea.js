import React from "react";
import { useState } from "react";

function CreateArea(props) {
    const [isExpand,setExpand]=useState(false);
    const [text,setText]=useState({
        title:"",
        content:""
    });
    function expanded(){
        setExpand(true)
    }
   
  return (
    <div>
      <form>
        <input onClick={expanded} onChange= {event=>{ const {name,value}=event.target; setText(()=>{return{...text,[name]:value}})}} name="title" placeholder="Title" value={text.title} />
       {isExpand && <textarea onChange= {event=>{ const {name,value}=event.target; setText(()=>{return{...text,[name]:value}})}} name="content" placeholder="Take a note..." rows="3" value={text.content} />} 
        <button onClick={(e)=>{e.preventDefault(); props.AddContent(text)}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;