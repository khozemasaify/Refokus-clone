import React, { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

function Card() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className='w-full h-[60vh] px-20 gap-[2.5px] flex'>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{ paddingInline: isHover ? '20px' : '15px', transition:" .5s ease" }}
       className="right hover:bg-[#3E3E46] relative w-[35%] px-[15px] rounded-2xl h-[98%] bg-[#29292E]">
        <div className="head w-full flex items-center justify-between pt-5 h-12">
          <h1 className='capitalize text-[15px]'>up next: news</h1>
          <span className='text-2xl'><IoIosArrowRoundForward /></span>
        </div>
        <div className="mid pt-8">
          <h1 className='text-3xl font-medium w-8/12'>Insights and behind the scenes</h1>
        </div>
        <div className="foot absolute bottom-5">
          <h6 className='text-sm font-light opacity-70'>Explore what drives our team.</h6>
        </div>
      </div>
      <div
      onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
       className={`right hover:bg-[#7443FF] hover:ease-in-out hover:duration-300 w-[65%] rounded-2xl py-2 px-6 h-[98%] bg-[#29292E]`}
         // Adjust padding based on hover state
      >
        <div 
         
         style={{ paddingInline: isHovered ? '20px' : '15px', transition:" .5s ease" }}
         className="head w-full flex items-center justify-between pt-5 h-12">
          <h1 className='capitalize text-[15px]'>get in touch</h1>
          <span className='text-2xl'><IoIosArrowRoundForward /></span>
        </div>
        <div
        style={{ paddingInline: isHovered ? '20px' : '15px', transition:" .5s ease" }}
         className="mid pt-8">
          <h1 className='text-3xl font-medium w-4/12'>Let's get to it, together</h1>
        </div>
        <div className="foot mt-20 w-full">
          <h1 className='leading-none text-[7vw] font-medium tracking-tight'>Start a Project</h1>
          <button className='px-7 mt-5 text-md py-3 border rounded-full'>Contact us</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
