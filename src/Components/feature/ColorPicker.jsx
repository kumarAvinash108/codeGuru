import { ChromePicker,PhotoshopPicker,BlockPicker } from "react-color";
import { useState } from "react";
function ColorPicker(){
    const [color, setColor] = useState("#fff");
    return (
        <div className={` mx-8 my-8 w-full flex items-center justify-center gap-8`}>
        <ChromePicker color={color} onChange = {update=>setColor(update.hex)} disableAlpha={true}/>
        <div className={`h-[37vh] w-[37vh] flex items-center justify-center`} style={{backgroundColor:color}}>
           <h1 className="bg-white px-2 py-1 text-black">{color}</h1>
        </div>
        </div>
    )
}
export default ColorPicker;