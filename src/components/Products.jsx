/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Product from "./Product";
import { animate, easeInOut, motion } from "framer-motion";
import second from "../assets/Arqitel project video 4_3.webm";
import third from "../assets/Cula_promo_new_4_3.mp4";
import Fourth from "../assets/webflow-education-promo.mp4";
import five from "../assets/TTR project video 4_3_H.264.webm";
import six from "../assets/Maniv-Compressed.mp4";
import seven from "../assets/YIR website 2022 4_3_VP9.webm";
import eight from "../assets/yahoo.webm";
import nine from "../assets/rainfall.webm";
import elev from "../assets/jungle-4-3-.webm";
import twel from "../assets/Silvr.webm";
import thirte from "../assets/remind.webm";
import fourt from "../assets/summon.webm";
import fivt from "../assets/weglotlikemagic.webm";
import sixt from "../assets/rocketchat.webm";

function Products() {
  const [first, setfirst] = useState(0);
  const mover = (val) => {
    setfirst(val * 23);
  };
  const data = [
    {
      title: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      livebtn: true,
      casebtn: false,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-1600.webp')`,
    },
    {
      title: "Cula",
      desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      livebtn: true,
      casebtn: false,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png')`,
    },
    {
      title: "Layout Land",
      desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      livebtn: true,
      casebtn: false,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f11502e2fa59425089e2e6_Work%20Background-p-2000.png')`,
    },
    {
      title: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      livebtn: true,
      casebtn: false,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/64b754980b23ab2f2f2ff9e2_Work%20Background%20(1)-p-2000.jpg')`,
    },
    {
      title: "Maniv",
      desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      livebtn: true,
      casebtn: false,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201.png')`,
    },
    {
      title: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      livebtn: true,
      casebtn: false,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png')`,
    },
    {
      title: "Yahoo!",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      livebtn: true,
      casebtn: true,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299cbb5dc5fd8b2972010_Yahoo%20bg.png')`,
    },
    {
      title: "Rainfall",
      desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      livebtn: true,
      casebtn: true,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299ec9a478d08095a0122_Rainfall%20bg.png')`,
    },
    {
      title: "Jungle",
      desc: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      livebtn: true,
      casebtn: true,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/63ede953b6b5f3582560753a_Work%20Background-p-2000.jpg')`,
    },
    {
      title: "Silvr",
      desc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      livebtn: true,
      casebtn: true,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/64868917c44436f6a7595e4f_Work%20Background%20(1)-p-2000.jpg')`,
    },
    {
      title: "Remind",
      desc: "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      livebtn: true,
      casebtn: true,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/63529a2191211c3ebc67e4b7_Remind%20bg.png')`,
    },
    {
      title: "Summon",
      desc: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      livebtn: true,
      casebtn: true,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299c0532977f3221f06f5_Summon%20bg-p-2000.png')`,
    },
    {
      title: "Like Magic",
      desc: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      livebtn: true,
      casebtn: true,
      bg: `url('https://assets-global.website-files.com/6334198f239547f2fccd84c1/637e6790db842e13a0e0aa51_Work-Background-p-2000.png')`,
    },
  ];
  const videoRef = useRef(null);
  const constraintsRef = useRef(null)

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
};

  return (
    <div onMouseMove={()=>handleMouseMove()} className="relative min-h-screen  bg-[#161618]">
      {data.map((item, index) => {
        return <Product data={item} index={index} key={index} mover={mover} />;
      })}
      <div className=" w-full h-full absolute top-0 pointer-events-none  ">
        <motion.div
          initial={{ y: first, x: "-50%" }}
          animate={{ y: first + `rem`}}
          ref={constraintsRef}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          className="window w-[32rem] absolute  left-[45%] top-0   overflow-hidden      h-[23rem] "
        >
          <motion.div
          
            onMouseMove={()=>{
                playVideo()
                handleMouseMove()
            }}
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full  "
          >
            <video autoPlay loop muted src={second}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-yellow-600 "
          >
            <video autoPlay loop muted src={third}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-red-600 "
          >
            <video autoPlay loop muted src={Fourth}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-emerald-600 "
          >
            <video autoPlay loop muted src={five}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-zinc-600 "
          >
            <video autoPlay loop muted src={six}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-zinc-600 "
          >
            <video autoPlay loop muted src={seven}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-zinc-600 "
          >
            <video autoPlay loop muted src={eight}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-zinc-600 "
          >
            <video autoPlay loop muted src={nine}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-zinc-600 "
          >
            <video autoPlay loop muted src={elev}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-zinc-600 "
          >
            <video autoPlay loop muted src={twel}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-zinc-600 "
          >
            <video autoPlay loop muted src={thirte}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-zinc-600 "
          >
            <video autoPlay loop muted src={fourt}></video>
          </motion.div>
          <motion.div
            animate={{ y: -first + `rem` }}
            transition={{duration:1,ease:[0.45, 0, 0.55, 1]}}
            className="slides w-full h-full bg-zinc-600 "
          >
            <video autoPlay loop muted src={fivt}></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
