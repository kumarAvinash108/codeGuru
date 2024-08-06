import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled } from 'react-codemirror2'




function EditorWrite({displayName, language, value, onChange,expand,collapse,h,setH,c,setC,j,setJ,clk, setClk}) {
  function handleChange(editor,data,value){
    onChange(value)
  }
 
  return (
    <>
    
    <div className='w-[31%] mx-5 mb-[10vh]'>
      <div className="flex items-center justify-between px-5">
        <h1 className="text-2xl text-white">{displayName}</h1>
        <img src={clk?collapse:expand} alt="" className=' cursor-pointer' />
        </div>
        <div className='max-h-[40vh]  overflow-y-auto'>
        <Controlled
          value={value}
          onBeforeChange={handleChange}
          options={{
          lint:true,
            mode:language,
            theme:'material',
            lineWrapping:true,
            lineNumbers:true,
           

           
            
          }}
          className=" overflow-hidden flex-grow-1"
          id="code-m"
          />
          </div>
          
      
    </div>
    
    </>
  )
}

export default EditorWrite