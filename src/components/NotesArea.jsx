import React, { useState } from 'react'
import "../App.css"
import DisplayNotes from './DisplayNotes';
import enter from "../assets/enter.png"
export default function NotesArea({notesOpen,setNotesOpen,createNotes,setCreateNotes,setClick,click,color,setColor,mobileView}) {
//console.log(notesOpen,createNotes)
console.log(click)

const date = new Date();
//console.log(date.toLocaleString('default', { month: 'long' }),date.getDate(),date.getFullYear())
const options = {
  
  hour: 'numeric',
  minute: 'numeric',
  year: 'numeric',
  day: 'numeric',
  month: 'long',
  
 
};



let hours = date.getHours();
let minutes = date.getMinutes();

// Check whether AM or PM
let newformat = hours >= 12 ? 'PM' : 'AM';

// Find current hour in AM-PM Format
hours = hours % 12;

// To display "0" as "12"
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;

console.log(hours + ':' + minutes + ' ' + newformat);
const time1=hours + ':' + minutes + ' ' + newformat
// Display the time in 12-hour format with AM/PM
// console.log(hour + ":" + minute);
// const time1=`${hour} :${minute}`


//console.log(formattedDate);
const options1 = {
  
  // hour: date.getHours().toLocaleString('default', { hour: 'numeric' }),
  // minute: date.toLocaleString('default', { minute: 'numeric' }),
  time:time1,
  year:date.toLocaleString('default', { year: 'numeric' }),

  day: date.getDate().toLocaleString('default', { day: 'numeric' }),
  month:date.toLocaleString('default', { month: 'long' })
  
 
};

console.log(options1.hour)
const time=`${options1.time} ${options1.day} ${options1.month}  ${options1.year} `;
//console.log(time);
// const time=`${options1.time} ${options1.day} ${options1.month}  ${options1.year} `;
const [notes, setNotes] = useState(  localStorage.notes ? JSON.parse(localStorage.notes) : []);
    console.log(notes);
    const[notesUser,setNotesUser]=useState({
      name:""})

    const[isButtonDisabled,setButtonDisabled]=useState(true);
    
    const enableButton = () => {
      setButtonDisabled(false);
 
  };
    const disableButton = () => {
      setButtonDisabled(true);
   
  }
  // const[notesUser,setNotesUser]=useState()
    const handleInput=(e)=>
    {
      enableButton();
   let value=e.target.value;
let name=e.target.name;

  setNotesUser({[name]:value})
  
   
    
} 

const newNote = {
 
  id: click,
notesUser,
  modified:time,

}
    

  

console.log(notesUser)
const handleNotes=(e)=>
{
disableButton();

  const target=e.target
   console.log(e.target);
  setNotes([newNote,...notes])
  setNotesUser({name:""})
  
}

//console.log(target)
    //setCreateNotes([...createNotes,notes])
    console.log(notes);

    // const [key, setKey] = useState("");

  const handleKeyUp = (e) => {
    
if(e.keyCode===13)
{

// alert("enter key pressed")

  setNotes([newNote,...notes])
  localStorage.setItem("notes",JSON.stringify(notes))
  setNotesUser({name:""});
}
return
       
    };
    // console.log(key);


    localStorage.setItem("notes",JSON.stringify(notes))
 

 
    return(
    <>
        
          {notesOpen&&<div className='notes-container'>

                
          <DisplayNotes  notes={notes} click={click} createNotes={createNotes}/>
   
         
        
           {notesOpen&& <div className='text-div'>

            <textarea name="name" id="textarea" placeholder="Enter Your Text here....." value={notesUser.name}  onChange={(e)=>
                {
               
            
                 handleInput(e)
        
                }}onKeyUp={(e)=>   handleKeyUp(e)}>
            
             
            </textarea>
           
                     <div className='enter-button' >
     
                      <button type="button"   disabled={isButtonDisabled}  onClick={(e)=>handleNotes(e)} >
                      <img src={enter} className={isButtonDisabled?"btn-style":"btn-style-active"} />
                      
                   </button>
                       
                    </div> 
         </div>}
    
         </div>}

           </>
        )

  
}
