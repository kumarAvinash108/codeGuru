import { useState } from "react";
import EditorWrite from "./EditorWrite";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Editor({expand,collapse}){
    useGSAP(()=>{
        gsap.to('.text-white span',{
            color:'white',
            stagger:0.2,
         
            duration:0.2,
            ease:"power3",
            opacity:1
        })
    })

const[h,setH] = useState(false);
const[c,setC] = useState(false);
const[j,setJ] = useState(false);
const [clk,setClk] = useState(false);
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const srcDoc = `<html>
    <head>
        <style>
            ${css}
        </style>
    </head>
    <body> ${html}</body>
    <script>
        ${js}
    </script>
    </html>`;
    return(
        <div className="w-[100%] h-[100%]" id="editor-con">
            <div className="flex items-center justify-center shrink-0">
                <EditorWrite language={"xml"} displayName={"HTML"} value={html} onChange={setHtml} expand={expand} collapse = {collapse} h = {h} setH={setH} c={c} setC = {setC} j = {j} setJ= {setJ} clk={clk} setClk={setClk} />
                <EditorWrite language={"css"} displayName={"CSS"} value={css} onChange={setCss} expand={expand} collapse = {collapse} h = {h} setH={setH} c={c} setC = {setC} j = {j} setJ= {setJ} clk={clk} setClk={setClk} />
                <EditorWrite language={"javascript"} displayName={"JavaScript"} value={js} onChange={setJs} expand={expand} collapse = {collapse} h = {h} setH={setH} c={c} setC = {setC} j = {j} setJ= {setJ} clk={clk} setClk={setClk}/>
               
            </div>
            <div className="w-[100%] h-[50%] flex bg-white overflow-y-auto">
             <iframe
             srcDoc={srcDoc}
              title = "output"
              sandbox = "allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
             />
            </div>
            <h1 className='text-white ml-5 text-xl mt-5 '>{
                "This Editor is only for practice purpose...".split('').map((data,index)=><span className="text-black" key={index}>{data}</span>)
            }</h1>
            <div className="h-4"></div>
        </div>
    )
}
export default Editor;