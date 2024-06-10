import React, { useContext, useState } from 'react'
import ReactDOM from "react-dom"
import "../css/Modal.css"
import "../App.css"
// export default function AddandUpdate({isOpen,contact,setContact,edit,rowId,setRowId,setIsOpen,}) 
export default function Modal({setCreateNotes,createNotes,closeModal,isOpen,setIsOpen}){

    console.log(createNotes)
    localStorage.setItem("groups-to-do",JSON.stringify(createNotes))
//const[contact,newcontact]=useState () 
//console.log(edit);
//console.log(rowId);
//console.log(contact);
const [colors,setColors]=useState(["#B38BFA", "#FF79F2", "#43E6FC","#F19576","#0047FF"," #6691FF"])
//localStorage.setItem("groups-to-do",JSON.stringify(createNotes));
const[user,setUser]=useState({
    name:"",
    color:"",
   
})

const handleInput=(e)=>
{
    let name=e.target.name;
    let value=e.target.value;
    console.log(name,value)
    setUser({...user,[name]:value})
}
const handleSubmit=(e)=>
{
e.preventDefault();


console.log(user);

setCreateNotes([...createNotes,user])
localStorage.setItem("groups-to-do",JSON.stringify(createNotes))



}


              
   
  return ReactDOM.createPortal(
   
       
        <div className='modal-wrapper' onClick={closeModal}>
            <div className='add-notes' onClick={(e)=>e.stopPropagation()}>
                <div className='heading'>
                <h2>Create New Notes group</h2>
                </div>
               
               
                <form > 
             
                    <div className='group-name'>
                    <label htmlFor="name" className='label'><h2>Group Name</h2></label>
                    <input type="text" id ="name" name="name" value={user.name} onChange={handleInput} placeholder='enter your group name'></input>
                    </div>
                    <div className='color-select-div'>
                    <div className='color-button'>

                   
                    <h2>Choose Color</h2>
                    <div className='color-btns-div'>
                   {colors.map((curColor,index)=>
                {
                    return(
                      

                      
                        <button type="button" key={index} name="color" value={curColor}  onClick={handleInput} className="color-btns" style={{backgroundColor:curColor}}></button>
                       
                    )
                })}
                 </div>
                   </div>
                    </div>
                    <div className='create-button'>
                    <button  type="submit"  onClick={(e)=>
                    {
                        handleSubmit(e)
                    
                    }
                  
                }>Create</button>
                    </div>
                   
                </form>
            </div>
            </div>,
 document.querySelector(".myModalPortal")

  )

}
