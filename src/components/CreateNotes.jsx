import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";

import Scrollbars from 'react-custom-scrollbars-2'
import "../App.css"

import NotesArea from './NotesArea';
import ImageNotes from './ImageNotes';
import Modal from './Modal';
import NotesHeading from './NotesHeading';

export default function CreateNotes({createNotes,setCreateNotes,mobileView,setMobileview}) {
    const[isOpen,setIsOpen]=useState(false);
    //console.log(mobileView)

//console.log(mobileView)
console.log(createNotes)
 const[notesOpen,setNotesOpen]=useState(false);
//  const[desktopView,setDesktopView]=useState(true);
const[showImage,setShowImage]=useState(true);
const[click,setClick]=useState("");
const[color,setColor]=useState("")
//const[div,setDiv]=useState(false)

// const handleNotesSection=(e)=>
// {
//     console.log(e.target)
//     return(
       
//     )

// }
const closeModal=()=>
{
    return setIsOpen(false)
}
const getActiveNote=()=>
    {
        return createNotes.find((notes)=>notes.id===click)
    }
  return (
    <>
    <section className='notes-section'>
    <div className='hero-section grid grid-two-cols'>
    <div className='first-container'>
    <div className="to-do-lists-container">
    <div className='notes-heading'>
    <h1>Pocket Notes</h1>
    </div>
   
    <div className='create-notes-button'>
        
   <div className='button-icon'onClick={()=>setIsOpen(true)}>
   <FaPlus className='icon-plus'/>
   <button  type="button" >Create Notes group</button>
 </div>
  
    </div>
  

<div className='add-notes-container'>
<Scrollbars>
{createNotes.map((curNotes,index)=>
{

    console.log(curNotes.color)
   
    console.log(curNotes);
    return(
        <>
             <div className='notes' key={index} onClick={()=>
             { 
                setClick(curNotes.name);
                setNotesOpen(true);
               setShowImage(false);
              // setMobileView(true);
              //  setDesktopView(!desktopView)

               }
             }>
            
               
        <div className="icon-notes-heading">
        <div className='icon'  style={{backgroundColor:curNotes.color}}>{curNotes.name.substring(0,2)}
               
               </div>
              <div className='todo-notes-heading'>
                <h2>
                {curNotes.name}
                </h2>
            
              </div>
        </div>
                
          
            </div>
            </>
    )
 
   
})}
     </Scrollbars>
    </div>

    </div>
       {/* <NotesHeading mobileView={mobileView} setMobileView={setMobileView} click={click} createNotes={createNotes}/> */}
    </div>
  
    <div className='second-container'>
     
<ImageNotes setShowImage={setShowImage} showImage={showImage}/>
<NotesArea setNotesOpen={setNotesOpen}  notesOpen={notesOpen} setClick={setClick} mobileView={mobileView} setCreateNotes={setCreateNotes} click={click} createNotes={createNotes}/>
    </div>

    </div>    
 
    </section>
   {isOpen&& <Modal setCreateNotes={setCreateNotes} createNotes={createNotes} setIsOpen={setIsOpen} isOpen={isOpen}closeModal={closeModal} />}
     </>
  )
 
 
}
