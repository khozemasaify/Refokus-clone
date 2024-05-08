/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaArrowTurnUp  } from "react-icons/fa6";
import Button from './Button';
function Navbar() {
    const [first, setfirst] = useState(["Home", "Work", "About" ,"News"])
  return (
    <div className=' w-full flex  bg-zinc-900 h-16  ' >
        <div className="left flex items-center w-[60%]  h-full">
            <div className="logo pl-20 ">
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            </div>
            <div className="  flex items-center f h-full  pl-32 gap-20 w-11/12">
                {first.map((item,index)=>{
                   return <h1 key={index}  className=' font-sans    flex items-center gap-1 text-md font-[400] text-[14px]   tracking-tighter  ' >
                    {index===1&&<span style={{boxShadow:"0 0 0.7em #00ff19"}} className=' inline-block w-[.4em] h-[.4em] bg-[#00ff19] rounded-full ' ></span>}
                    {item}
                    </h1>
                })}
            </div>
        </div>
        <Button/>
    </div>
  )
}

export default Navbar