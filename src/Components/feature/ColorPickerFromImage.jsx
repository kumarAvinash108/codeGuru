import { useState } from "react";

function ColorPickerFromImage(){
    const [color, setColor] = useState("#fff");
    const [image, setImage] = useState(null);
    const openEyeDropper = async ()=>{
        let eyeDropper = new EyeDropper();
        const {sRGBHex} = await eyeDropper.open();
    setColor(sRGBHex)
    };
    const handleFileInput = (e)=>{
        setImage(URL.createObjectURL(e.target.files[0]))
    }
    const handleCopyColor = async ()=>{
        await navigator.clipboard.writeText(color)
        alert("Color copied to clipboard")
    };
    return(
        <div className="h-[60vh] w-full">
        <h1 className="text-center text-white text-2xl font-bold">Pick Color From Image</h1>
        <div className="flex items-center justify-center w-full h-[98%] my-2">
            <div className="h-[100%] w-[30%] flex justify-center flex-col px-10">
               <div className=" my-4">
               <h1 className="text-lg text-white my-2">Select Image from file</h1>
                <input type="file" onChange={handleFileInput} className="text-white"/>
               </div>
               <div className="">
               <h1 className="text-lg text-white my-2">Select Image from file</h1>
               <button className="px-3 py-2 text-black bg-white rounded-lg" onClick={openEyeDropper}>Open EyeDropper</button>
               </div>
               <div className="w-32 h-16 my-4 flex items-center justify-center cursor-pointer" style={{backgroundColor:color} } onClick={handleCopyColor}>
                <h1 className="bg-white text-black px-2 py-1">{color}</h1>
             
               </div>
            </div>
            <div className="h-[100%] w-[70%] bg-white flex items-center justify-center px-5 py-5">
                {image==null ? <h1 className='text-black text-center text-lg bg-white'>No image selected</h1> : <img src={image} className="h-[100%] w-[100%] object-cover object-center"></img>}
            </div>
        </div>
        </div>
    )

}
export default ColorPickerFromImage;