/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Stripe({url,Number}) {
  return (
    <div className=' flex w-1/6 my-5 items-center justify-between max-w-72 px-3 py-6 border-t-[1.2px] border-b-[1.3px] border-zinc-600   border-l-[1.3px]    border-r-[1.3px] bg/-sky-600' >
        <img src={url} alt="" />
        <span>{Number}</span>
    </div>
  )
}

export default Stripe