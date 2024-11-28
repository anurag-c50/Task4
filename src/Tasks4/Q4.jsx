// . What are refs in React used for?
import React,{useState,useRef} from 'react'

export default function Q4() {
    const click=useRef()
    const Focus=()=>{
        click.current.focus()
    }
  return (
    <>
    <input type="text"  ref={click}/>
    <input type="button" value="Focus" onClick={()=>{Focus()}} />
    </>
  )
}
