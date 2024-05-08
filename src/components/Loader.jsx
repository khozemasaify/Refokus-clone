/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
function Loader() {
  return (
    <motion.div initial={{y:0}}  transition={{ease:"easeInOut",duration:2}} animate={{y:"-100%"}}  className=' overflow-hidden  absolute z-10 top-0 w-[100vw] h-screen bg-black' >
      <div className="  absolute overflow-hidden flex justify-between flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inner-page w-10/12 h-5/6 b-red-600 ">
        <motion.div initial={{opacity:1}} animate={{opacity:0}} transition={{duration:1,ease:"easeInOut"}} className="  line w-full h-[1px] bg-slate-100 "></motion.div >
        <motion.div initial={{y:'0%',opacity:1}} animate={{y:'-80%',opacity:0}} transition={{duration:1,ease:"easeInOut" }}  className=" overflow-hidden h-36  text-[10vw] ml-[29vw] font-medium leading-none tracking-tighter   "> <h1 className=' overflow-hidden'  >Work</h1> <span style={{ textShadow:"0 0 4em #00ff19"}} className=' blur-[.2vw] inline-block mb-24 w-[.12em] h-[.12em] bg-[#00ff19] rounded-full ' ></span>  </motion.div>
        <motion.div initial={{opacity:1}} animate={{opacity:0}} transition={{duration:1,ease:"easeInOut"}}  className="line w-full h-[1px] bg-slate-100 "></motion.div>
      </div>
    </motion.div>
  )
}

export default Loader