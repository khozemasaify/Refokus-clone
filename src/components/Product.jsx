/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from './Button';

function Product({data,mover,index}) {
    const { title ,desc ,livebtn,casebtn,bg} = data 
  const [showBackground, setShowBackground] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowBackground(true);
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
    setShowBackground(false);
  };

  return (
    <div
      className='w-full py-20   h-[23rem] relative'
      onMouseEnter={() => {
        mover(index);
        handleMouseEnter()
      }
      
      }
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `${bg}`,
          opacity: showBackground ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      ></div>
      <div className="max-w-screen-xl relative z-10 flex items-center justify-between mx-auto">
        <h1 className='text-6xl'>{title}</h1>
        <div className="left w-1/4">
          <p className=' relative text-xl mb-5'>{desc}</p>
          <div className='-translate-x-[19%] relative   ' > 
          {livebtn && showButton &&  <Button  title="Live Website" style={{ opacity: showButton ? 1 : 0, transition: 'opacity 5s ease-in-out' }}  />}
            {casebtn && showButton && (
              <span className="absolute top-0 -right-48"
              style={{ opacity: showButton ? 5 : 0, transition: 'opacity 5s ease-in-out' }}
              >
                <Button  title="Case Study" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
