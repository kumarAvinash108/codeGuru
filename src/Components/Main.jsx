import React from 'react'
import Header from './Header'
import ColorPicker from './feature/ColorPicker'
import ColorPickerFromImage from './feature/ColorPickerFromImage'
import Editor from './feature/Editor'
import { Outlet } from 'react-router-dom'

function Main({clicked}) {
  return (
    <div className={`h-full  ${clicked?'w-[85vw]':'w-[96vw]'} overflow-x-hidden`}>
    
      <ColorPicker clicked={clicked}/>
      <ColorPickerFromImage/>
   {/* <Editor/> */}
 
    </div>
  )
}

export default Main