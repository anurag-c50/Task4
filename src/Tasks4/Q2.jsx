// . How do you create an event in React?

import React from 'react'

export default function Task2() {
  const handleEvent=()=>{
    console.log(43)
  }
  return (
    <div>
      <input type="button" value="Enter" onClick={()=>handleEvent()} />
    </div>
  )
}
