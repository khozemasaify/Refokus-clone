/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { data } from "autoprefixer";
function Work() {
  const [images, setimages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "53%",
      left: "40%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isactive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change",(data)=>{
    function showimages(arr) {
      return setimages((prev)=>{
       return  prev.map((item,index)=>(
          arr.indexOf(index)=== -1 ?(
            {...item, isactive: false}
          ) :(
            {...item, isactive: true}
          )
        ))
      })
    }
    switch (Math.floor(data*100)) {
       case 0:
        showimages([])
        break;
        case 1:
          showimages([0])
        break;
        case 2:
          showimages([0,1])
        break;
        case 3:
          showimages([0,1,2])
        break;
        case 4:
          showimages([0,1,2,3])
        break;
        case 6:
          showimages([0,1,2,3,4])
        break;
        case 7:
          showimages([0,1,2,3,4,5])
        break;
    }
  })

  return (
    <div className=" w-full ">
      <div className=" relative max-w-screen-xl mx-auto text-center ">
        <h1 className=" text-[40vw] font-medium    tracking-tight leading-none">
          work
        </h1>
        <div className=" absolute   top-0 left-0  w-full h-full bg/-sky-600 ">
          {images.map((item, index) => {
            return (
              item.isactive && (
                <img
                  key={index}
                  style={{ top: item.top, left: item.left }}
                  className=" rounded-md absolute  -translate-x-1/2 -translate-y-1/2  w-60 bg-sky-600 h-60"
                  src={item.url}
                  alt=""
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
