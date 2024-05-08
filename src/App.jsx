/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Text from './components/Text'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import MouseFollower from './components/MouseFollower'
import Loader from './components/Loader'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' w-full select-none overflow-hidden min-h-screen font-["satoshi"] bg-[#161618] text-white' >
      <Loader/>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App