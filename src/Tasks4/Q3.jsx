// . Why is there a need to use keys in Lists?

import React, { useState } from 'react'

export default function Q3() {
  
  const [persons,setPerson] = useState([
    {name: 'Peter', age: 13},
    {name: 'Paul', age: 15},
    {name: 'Mary', age: 17}
]); 
const DeleteElememt=(index)=>{
  const newarra=persons.filter((_,i)=>{
    return i!==index
  })
  setPerson(newarra)
}

  return (
    <div>
      {persons.map((person,index)=>{
        return(
          <>
            <div className="person" key={index}>{person.name}&nbsp;{person.age}</div>
            <input type="button" value="Delete" onClick={()=>{DeleteElememt(index)}}/>
          </>
        )
      })}
    </div>
  )
}
