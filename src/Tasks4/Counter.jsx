import React,{useState} from 'react'
import styled from "styled-components"
export default function Counter() {
    const [Count,setCount]=useState(0)
    const Increment=()=>{
        setCount(Count+1)
    }
    const Decrement=()=>{
        if(Count===0){
            setCount(0)
        }else{
            setCount(Count-1)
        }
    }
  return (
    <>
    <Container>
    <div className="Container">
        <div className="CountShow">
            <h1 className='h1'>{Count}</h1>
        </div>
        <div className="button">
            <div className="box">
                <input type="button" className='Add' value="Increment" onClick={Increment()} />
            </div>
            <div className="box">
                <input type="button" className="Sub" value="Decrement" onClick={()=>{Decrement()}}/>
            </div>
        </div>
      </div>
      </Container>
    </>
  )
}
const Container = styled.div`
.Container{
    height: 97vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.CountShow{
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28vw;
}
.button{
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36vw;
}
.h1{
    height: 12vh;
    display: flex;
    font-size:67px;
    justify-content: center;
    align-items: center;
    width: 6vw;
    border-radius: 50px;
}
.box{
 height: 24vw;
    width: 14vw;
    position: relative;
}
.Add{
    position: absolute;
    left: 22px;
    height: 6vh;
    width: 11vw;
}  
.Sub{
    position: absolute;
    left: 22px;
    height: 6vh;
    width: 11vw;
}      
`
