
import { Link } from 'react-router-dom';
import img from '../assets/Images/menu-line.png';
import Options from './Options';
import Editor from './feature/Editor';
function SideBar({clicked, setClicked}){
   
return (
   <div className={`h-full ${clicked ? "w-[15vw]" : "w-[5vw]"} bg-[#1E1F20] flex items-center justify-start flex-col gap-4 relative`}> 
      <div className={ `h-[10vh] ${clicked ? "w-[15vw]" : "w-[5vw]"} flex items-center justify-center`}>
      <img src={img} alt="" className='cursor-pointer'  onClick={()=>{
     setClicked(!clicked)
     console.log('clicked')
      }}/>
      </div>
      <Link to="/"><Options text={"Talk to Gemini"} click={clicked}/></Link>
      <Link to="/color-picker"><Options text={"color-picker"} click={clicked}/></Link>
     <Link to="/plan-project"><Options text={"plan your project"} click={clicked}/></Link>
     <Link to="/editor"><Options text={"Editor"} click={clicked}/></Link>
     <h1 className='text-md uppercase absolute bottom-[4vh]' style={clicked ? {display:"block"}:{display:"none"}}>made with love❣️</h1>
      
   </div>
)
}
export default SideBar;