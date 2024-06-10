import React from 'react'
import "../css/Image.css"
import pocket from "../assets/pocket.png";
import lock from"../assets/lock.png"
export default function ImageNotes({setShoWImage,showImage}) {
  return (
    <>
     {showImage &&
     
     <div className='image-container'>
        <div className='image-text'>
        <figure>
            <img src={pocket}/>
        </figure>
        <div className='text'>
        <h2>Pocket Notes</h2>
        <p>Send and receive messages without keeping your phone online.<br/>
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        </div>
      
        
   
    <div className='end'>
    <img src={lock}/>
    <p>end-to-end encrypted</p>
    </div>
   
   </div>}
    </>
   

  )
}
