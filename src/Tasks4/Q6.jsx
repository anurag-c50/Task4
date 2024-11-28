import React, { useState } from 'react'

export default function Q6() {
    const [Input,setInput]=useState("")
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(document.getElementById("text").value)
    }
  return (
   <>
   <form onSubmit={(e)=>{handleSubmit(e)}}>
   <input type="text" id="text"  name="name" onChange={(e)=>{handleChange(e)}}/>
   <button type='submit'>Submit</button>
   </form>
   </>
  )
}
