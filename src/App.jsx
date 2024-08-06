import React from 'react'
import SideBar from './Components/SideBar'
import Main from './Components/Main'
import { useState } from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
function App() {
  const [clicked, setClicked] = useState(false)
  return (
  <>
  <div className="h-screen w-full bg-[#131314] flex">
    <SideBar clicked = {clicked} setClicked = {setClicked}/>
    <div className={`h-full  ${clicked?'w-[85vw]':'w-[96vw]'} overflow-x-hidden`}>
<Header/>
<Outlet/>
    </div>
  </div>
  </>
  )
}

export default App