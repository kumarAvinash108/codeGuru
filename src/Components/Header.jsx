

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header(){
    useGSAP(
        () => {
            
            gsap.to('.mx-2 span', { color:'white', stagger:0.2, duration:1, ease:"power3.inOut",opacity:1 }); 
        },
        
    ); 
    return (
        
        <div className="w-full h-12 flex items-center justify-center">
            <h1 className="mx-2 text-black text-3xl font-semibold "><span className='text-black opacity-0'>C</span><span className='text-black opacity-0'>o</span><span className='text-black opacity-0'>d</span><span className='text-black opacity-0'>e</span><span className='text-black opacity-0'>G</span><span className='text-black opacity-0'>u</span><span className='text-black opacity-0'>r</span><span className='text-black opacity-0'>u</span></h1>
        </div>
    )
}
export default Header;