import React, { useState } from 'react'
import "../App.css"
import DisplayNotes from './DisplayNotes';
import CreateNotes from './CreateNotes';

  
export default function NotesHeading({mobileView,setMobileView,click,createNotes}) {
//console.log(notesOpen,createNotes)
console.log(click)

// const[desktopView,setDesktopView]=useState(false);
//const user=JSON.parse(localStorage.getItem("notes"))

// let existingProduct=user.find((curElem)=>curElem.name===click)
//       console.log(existingProduct);
const date = new Date();
//console.log(date.toLocaleString('default', { month: 'long' }),date.getDate(),date.getFullYear())
const options = {
  
  hour: 'numeric',
  minute: 'numeric',
  year: 'numeric',
  day: 'numeric',
  month: 'long',
  
 
};


// Get the current hour
let hour = date.getHours();

// Get the current minute
let minute = date.getMinutes();

// Convert the hour to 12-hour format
hour = hour % 12;

// Add AM/PM to the hour


// Display the time in 12-hour format with AM/PM
console.log(hour + ":" + minute);
const time1=`${hour} :${minute}`
console.log(time1)
const formattedDate = date.toLocaleString('en-US', options);
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
//const time=`${options1.hour} :${options1.minute} ${options1.day} ${options1.month}  ${options1.year} `;
//console.log(time);
const time=`${options1.time} ${options1.month}  ${options1.year} `;
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
    //   const whichNotes=notes.find((curNotes)=>
    //     {
    //         if(curNotes.name===click)
    //         {

    //             return curNotes.name
    //         }
    //     })
    //     console.log(whichNotes)
   
    
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

    const [key, setKey] = useState("");

    const handleKeyUp = (e) => {
    
if(e.key==="Enter")
{
console.log("enter key pressed")

  setKey(e.key);
  
  localStorage.setItem("notes",JSON.stringify(notes))
  setNotesUser({name:""});
}
return
       
    };
    console.log(key);


    localStorage.setItem("notes",JSON.stringify(notes))
 


console.log(mobileView);


  return (
    <>
   {mobileView&& <div className="mobile-container">
    <button className='back' onClick={()=>setMobileView(false)}>Back</button>
   
          
    <DisplayNotes  notes={notes} click={click} createNotes={createNotes}/>

     <div className='text-div'>

<textarea name="name" id="textarea" placeholder="Enter Your Text here....." value={notesUser.name}  onChange={(e)=>
    {
   
   handleKeyUp(e)
     handleInput(e)

    }}>

 
</textarea>

         <div className='enter-button' >

          <button type="button"   disabled={isButtonDisabled}  onClick={(e)=>handleNotes(e)} >
          <img src="/enter.png" className={isButtonDisabled?"btn-style":"btn-style-active"} />
          
       </button>
           
        </div> 
</div>

</div>}
    
   
    

    

    </>

  )
 

}
