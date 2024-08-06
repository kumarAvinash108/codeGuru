function Options({text,click}){
    return(
<div className={`bg-white  w-fit rounded-md px-2 py-1 shadow-2xl cursor-pointer ${!click ? "hidden" : "block"}z`} style={click ? {display:"block"}:{display:"none"}}>
    <h1 className={`text-md text-gray-600 font-semibold uppercase ${!click ? "hidden" : "block"}`} style={click ? {display:"block"}:{display:"none"}}>{text}</h1>
</div>
    )
}
export default Options;