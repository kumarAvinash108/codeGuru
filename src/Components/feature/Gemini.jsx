import axios from "axios";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { api } from "../../assets/data/data";

function Gemini({img,loading}){
    const string = "Hello Developer"
    const [value, setValue] = useState("");
    const [output, setOutput] = useState("");
    const [send,setSend] = useState(false);
    const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [arr,setArr] = useState([]);

    async function generateAns(){
        console.log("loading...");
        const response = await axios({
            url:api,
            method:'post',
            data:{contents:[{parts:[{text:value}]}]}

        })
        
        
        setOutput(response?.data?.candidates[0]?.content?.parts[0]?.text)
        console.log(response?.data?.candidates[0]?.content?.parts[0])

     setArr(response?.data?.candidates[0]?.content?.parts[0]?.text.split('/n'))
        
        
        
    }
    const handleSend = ()=>{
        setOutput('')
        setSend(true)
        generateAns()
       
    }
    const typeWriter = async (text) => {
        setIsTyping(true);
        for (let i = 0; i < text.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 5)); 
          setTypedText(text.substring(0, i + 1));
        }
        setIsTyping(false);
      };
  
   useEffect(() => {
    if (output && !isTyping) {
      typeWriter(output);
    }
  }, [output])
   
   
    return(
        
        <div className="h-[100%] w-[100%] flex items-center justify-center flex-col">
            
          <h1 className="text-6xl bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent  text-left font-semibold">
        {string}
        <span className="text-yellow">👋</span>
          </h1>
         <h1 className="  text-6xl text-[#444746] my-3 font-semibold">How I can help you today?</h1>

           <div className="flex items-center justify-center gap-4 w-full">
           <textarea  value={value} onChange={(e)=>setValue(e.target.value)} className="w-[80%] h-[10vh] overflow-y-auto  bg-transparent text-white text-lg rounded-[10vh] my-4 flex-shrink-0 text-center  py-4 px-3 flex items-center justify-center" style={{border: "0.1vh solid #fff",resize:"none", scrollbarWidth:'none'}} onKeyPress={(e)=>{
            if(e.key==='Enter'){
              handleSend()
            }
           }}></textarea>
            <button onClick={handleSend} className="px-3 py-2   rounded-lg text-xl ">
                <img src={img} className=" object-cover object-center " ></img>
            </button>
           </div>
           <div className="w-[80%] h-[40vh]  overflow-y-auto rounded-lg pt-5 " style={{scrollbarWidth:'none'}}>
           <div className="w-full" style={send ? {display:"block"}:{display:'none'}} >
           {(output === '' && send==true) ? <Shimmer/> : <div className="min-h-[60vh]  px-3 py-2 bg-[#444746] rounded-xl ">
          {isTyping ? (    <p className="w-[100%] text-lg leading-relaxed tracking-normal px-4 py-3 font-light" id="paragraphAnswer">{typedText}</p>):    <p className="w-[100%] text-lg leading-relaxed tracking-normal px-4 py-3 font-light" id="paragraphAnswer">{output}</p>}
       
           </div>

           }
           </div>
          
           </div>
        </div>
       
    )
}
export default Gemini;