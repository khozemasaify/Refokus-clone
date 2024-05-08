import React, { useState } from 'react';
import { FaArrowTurnUp } from "react-icons/fa6";

function Button() {
   let initialTitle = "Start a Project"
    let altTitle = "New Title" 
    const [isAltTitle, setIsAltTitle] = useState(false);

    const handleClick = () => {
        setIsAltTitle(!isAltTitle);
    };

    return (
        <div className="right flex whitespace-nowrap h-full px-24">
            <div className="button  w-full h-full justify-end flex items-center">
                <button
                    className='ml-52 cursor-pointer navbar font-[400] flex items-center gap-3 text-[1vw] rounded-full px-6 py-2 bg-white text-black'
                    
                >
                    {isAltTitle ? altTitle : initialTitle}
                    <span className='rotate-90 mt-1 text-xs'>
                        <FaArrowTurnUp />
                    </span>
                </button>
            </div>
        </div>
    );
}



export default Button;
