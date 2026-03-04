//import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PickOmitRequired from './components/PickOmitRequired'
import Pimitive from './components/Pimitive'
import TSFunctions from './components/TSFunctions'
import TSInterfaces from './components/TSInterfaces'
import FunctionOverloading from './components/FunctionOverloading'
import AnyVSUnknown from './components/AnyVSUnknown'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/primitives' element={<Pimitive/>}/>
      <Route path='/interfaces' element={<TSInterfaces/>}/>
      <Route path='/functions' element={<TSFunctions/>}/>
      <Route path='/pickomit' element={<PickOmitRequired/>}/>
      <Route path='/funover' element={<FunctionOverloading/>}/>
      <Route path='/anyunknown' element={<AnyVSUnknown/>}/>
      <Route/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
