import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className='py-2 flex items-center text-[15px] justify-center gap-1 w-full text-center bg-[#edf9fe]'>
       <FaWhatsapp className='w-4 h-4'/>  WhatsApp 24/7: <span className=' cursor-pointer underline'>+1 (661) 384-8482</span>
    </div>
  )
}

export default Topbar