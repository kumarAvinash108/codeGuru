import { toFormData } from "axios";
import { useLayoutEffect, useState } from "react"
import { RouterProvider } from "react-router-dom";
import rough from 'roughjs';
const generator=rough.generator()
function Canvas(){
    const [elements,setElement] = useState([]);
    const [action,setAction] = useState('none');
    const[tool,setTool] = useState("");
    const [selected, setSelected] = useState(false);
    const[elementType,setElementType] = useState('line')
    const [selectedElement, setSelectedElement] = useState(null);
  const distance = (a,b)=>{
  const a1 = b.x - a.x
  const b1 = b.y - a.y
//   console.log( Math.sqrt(a1*a1 + b1*b1))
  return Math.sqrt(a1*a1 + b1*b1)
  }
  const adjustElementCoordinates = (element)=>{
    const {type, x1,y1,x2,y2} = element;
    if(type==='rectangle'){
        const minX = Math.min(x1,x2);
        const minY = Math.min(y1,y2);
        const maxX = Math.max(x1,x2);
        const maxY = Math.max(y1,y2);
        return {x1:minX,y1:minY,x2:maxX,y2:maxY}
    }
    else {
        if((x1 < x2) || (x1 == x2 && y1 < y2)) {
            return {x1:x1,y1:y1,x2:x2}
    }
    else{
        return {x1:x2,y1:y2,x2:x1,y2:y1}
    }

  }
}

const updateElement = (id,x1,y1,x2,y2,elementType)=>{
     const updatedEle = createElement(id,x1,y1,x2,y2,elementType)
        const elementCopy = [...elements]
        elementCopy[id] = updatedEle;
        // console.log(elementCopy)
        setElement(elementCopy)

}

    function handleRadio(value){
        setTool(value);
        setElementType(value)
        
    }
    function isWithinElement(x,y,element){
        const {type,x1,x2,y1,y2} = element;
        if(type==='rectangle'){
            const minX = Math.min(x1,x2);
            const minY = Math.min(y1,y2);
            const maxX = Math.max(x1,x2);
            const maxY = Math.max(y1,y2);
            return x >= minX && x<=maxX && y >= minY && y<=maxY;


        }
        else if(type==='line'){
            const a = {x: x1, y: y1}
            const b = {x: x2, y: y1}
            const c = {x,y}
            const offset = distance(a,b) - (distance(a,c) + distance(b,c))
            return Math.abs(offset)< 1;
        }

    }
    function getElementAtPosition(x,y, elements){
     return elements.find( element=> isWithinElement(x,y,element))
    }
    function createElement(id,x1,y1,x2,y2,type){
        const roughElement = type==='line'? generator.line(x1,y1,x2,y2) : generator.rectangle(x1,y1,x2-x1,y2-y1)
        // console.log(roughElement)
        return {id,x1,y1,x2,y2,type,roughElement};
    }
    const handleMouseDown = (event)=>{
        const {clientX, clientY} = event;
        if(tool === 'selection'){
         
            const element = getElementAtPosition(clientX, clientY,elements);
            if(element){
                const offsetX = clientX - element.x1;
                const offsetY = clientY - element.y1;
                setSelectedElement({...element, offsetX, offsetY});
                setAction("moving")
                console.log(1)
               
            }

        }
        else{
            
       const id = elements.length
       const element = createElement(id,clientX, clientY,clientX,clientY,elementType);
       setElement(previos=>[...previos, element])
       setAction('drawing')
        }
    }
    const handleMouseMove = (event)=>{
        const {clientX, clientY} = event;
        if(tool === "selection"){
            event.target.style.cursor = getElementAtPosition(clientX, clientY,elements)?"move":"default";
        }
        if(action==='drawing'){

        const {clientX, clientY} = event;
        let index = elements.length - 1;
        const {x1,y1} = elements[index]
        updateElement(index,x1,y1,clientX,clientY,elementType)
        
        } 
        else if(action==='moving'){
            const {clientX, clientY} = event;
          const {id,x1, x2,y1,y2,type,offsetX, offsetY,} = selectedElement;
          const width = x2-x1;
          const height = y2-y1;
          const newX1 = clientX - offsetX;
          const newY1 = clientY - offsetY;
          updateElement(id,newX1,newY1,newX1+width,newY1+height,type);

        }
    }
    const handleMouseUp = ()=>{
        let index = elements.length - 1;
        const {id,type} = elements[index]
        if(action === 'drawing'){
           const {x1,y1,x2,y2} =  adjustElementCoordinates(elements[index]);
           updateElement(id,x1,y1,x2,y2,type);
           console.log(elements)
        }
        
        setAction('none')
        setSelectedElement(null)
        
    }

    useLayoutEffect(()=>{
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height)
       const roughCanvas = rough.canvas(canvas);
    elements.forEach((ele)=>roughCanvas.draw(ele.roughElement))
  
      
    },[elements])
    return(
<div className="">
   <div className="mt-5 bg-white">
    <label htmlFor="selection" className="text-black">selection</label>
    <input type="radio" name="shape" value="selection" className="text-black" onChange={()=>{handleRadio("selection")}} />
    <label htmlFor="line" className="text-black" >line</label>
   <input type="radio" name="shape" id="line" value="line" className="text-black" onChange={()=>{handleRadio("line")}}/>
   <label htmlFor="rectangle" className="text-black">rectangle</label>
    <input type="radio" name="shape" id="rectangle" value="rectangle" className="text-black" onChange={()=>{handleRadio("rectangle")}} />
   </div>
<canvas id="canvas" className="bg-white" height={window.innerHeight} width={window.innerWidth}
onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}
></canvas>
</div>
    )
}
export default Canvas