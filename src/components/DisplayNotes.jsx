import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import "../App.css"
import { NavLink } from 'react-router-dom'

export default function DisplayNotes({createNotes,notes,click,mobileview}) {
    const user=JSON.parse(localStorage.getItem("notes"))
console.log(user,click)
    let notesDisplay=createNotes.find((curNotes)=>
    {
       
            return curNotes.name===click
        
      
    })
   
     console.log(notesDisplay.color);
  
    
    let notesDisplay1=notes.filter((curNotes)=>
        {
            return curNotes.id===click;
}
)

console.log(click.split(" "))

    // console.log(notesDisplay1.reverse())
// const sortedNotes=notesDisplay1.sort((a,b)=>b.modified-a.modified);
//console.log(sortedNotes)
  return (

    <div className='notes-section-display'>
    <div className='display-name-icon'>
    
    <div className='div-display-name-icon'>
    
   
  
       
      
    <div className='icon'  style={{backgroundColor:notesDisplay.color}}>{click.substring(0,2)}</div>
       
       <h2>{click}</h2>
    </div>
   
    </div>
<div className="notes-display">
<Scrollbars>
    {notesDisplay1.reverse().map((curVal,index)=>
    {
    
       
console.log(curVal.notesUser.name)
       
      
        return(
     
<div className='notes-area' key={index}>
<div>
<p> {curVal.modified}</p>
</div>


<div>
<p className="text"></p>
   
{curVal.notesUser.name}
    </div> 


               
                
            </div>
      
        )
            
     
    })}
  </Scrollbars>
   </div>
   </div> 
  )
}
