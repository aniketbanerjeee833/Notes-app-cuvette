import React, { useState } from 'react'

import "./App.css"

import CreateNotes from './components/CreateNotes'


export default function App() {
  const[createNotes,setCreateNotes]=useState(JSON.parse(localStorage.getItem("groups-to-do"))?? []);
  const[mobileView,setMobileView]=useState(false)
 

 

  return (
<>
  
<CreateNotes createNotes={createNotes} setCreateNotes={setCreateNotes} mobileView={mobileView} setMobileView={setMobileView}/>  

   
</>
  )
}
