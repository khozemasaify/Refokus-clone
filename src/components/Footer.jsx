/* eslint-disable no-unused-vars */
import React from 'react'

function Footer() {
  return (
    <div className=' w-full h-[50vh] bg--600  flex flex-col ' >
        <div className="left w-1/2 h-[40vh]  ">
            <div className="title w-full h-5/6 bg-zi/nc-600 flex pt-7  justify-center ">
                <h1 className=' text-[12vw] tracking-tighter' >refokus.</h1>
            </div>
            <div className="foot"></div>
        </div>
        <div className="right w-full h-[10vh] bg-600 flex ">
            <div className="nav flex items-center justify-center w-1/2 gap-[3vw] pr-16   ">
                <h1 className=' text-sm  opacity-40' >Privacy Policy</h1>
                <h1 className=' text-sm  opacity-40' >Cookie Policy</h1>
                <h1 className=' text-sm  opacity-40' >Impressum</h1>
                <h1 className=' text-sm  opacity-40' >Terms</h1>
                <h1 className=' text-sm  opacity-40' >Webflow Agency</h1>
            </div>
            <div className="para w-1/2 h-full bg-red-00 flex justify-end items-end py-5 px-8
             ">
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer