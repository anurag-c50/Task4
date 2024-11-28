import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Q2 from './Tasks4/Q2'
import Q3 from './Tasks4/Q3'
import Q4 from './Tasks4/Q4'
import Q5 from './Tasks4/Q5'
import Q6 from './Tasks4/Q6'
import Counter from './Tasks4/Counter'
export default function App() {
  return (
    <>
          <BrowserRouter>
        <Routes>
          <Route path='/2' element={<Q2/>}></Route>
          <Route path='/3' element={<Q3/>}></Route>
          <Route path='/4' element={<Q4/>}></Route>
          <Route path='/5' element={<Q5/>}></Route>
          <Route path='/6' element={<Q6/>}></Route>
          <Route path='/Counter' element={<Counter/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}
