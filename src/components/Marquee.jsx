/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

function Marquee({image,direction}) {
  return (
    <div className=' relative    flex w-full z-10 bg-green-0 overflow-hidden' >
      <div className='  w-60   absolute   blur-[2vw] shadow-2xl  z-[9999]     bg-[#151517]  -left-10        h-full   ' ></div>
      <div className='  w-44    absolute   blur-[2vw] shadow-2xl  z-[9999]     bg-[#151517]  -right-10        h-full   ' ></div>
      <motion.div initial={{x:direction==='left'?0:"-100%"}} animate={{x:direction==='left'?"-100%":'0'}} transition={{ease:"linear",duration:15,repeat:Infinity}}  className="flex flex-shrink-0 gap-40 py-10 pr-40 ">
        {image.map((item,index)=>(
          <img key={index} src={item} alt="" />
        ))}
      </motion.div>
      <motion.div initial={{x:direction==='left'?0:"-100%"}} animate={{x:direction==='left'?"-100%":'0'}} transition={{ease:"linear",duration:15,repeat:Infinity}}  className="flex flex-shrink-0 gap-40 py-10 pr-40 ">
        {image.map((item,index)=>(
          <img key={index} src={item} alt="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
