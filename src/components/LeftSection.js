import React, { useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { FaWhmcs } from "react-icons/fa";
import { useGptContext } from '../context/ContextapiProvider';
import LeftSectionMain from './LeftSectionMain';

function LeftSection() {

    const { setSideBarMessage, isSideBarHidden, setAllMessage, handleHiddenToggle } = useGptContext();

    return (
        <div className={`md:relative z-20 fixed top-0 bottom-0 ${isSideBarHidden ? 'w-0' : ' md:w-1/4 sm:w-2/4 w-[60%]'} h-screen bg-[#171717] text-white transition-all duration-[0.5s] z-30`}>

            <div className={`${isSideBarHidden ? "opacity-0" : "opacity-100"} transition-all duration-[0.2s] h-[88%] overflow-y-auto overflow-x-hidden custom-scrollbar `}>


                {/* Nav start */}

                <div className='absolute bg-[#171717] z-10 top-0 left-0 right-3 text-[#b4b4b4] flex justify-between items-center px-2 py-2'>
                    <div className='cursor-pointer p-2 transition-colors duration-150 text-xl rounded-md hover:bg-[#212121]' onClick={handleHiddenToggle}>
                        <CgWebsite />
                    </div>

                    <div className='cursor-pointer text-lg p-2 rounded-md hover:bg-[#212121] transition-colors duration-150' onClick={() => { setAllMessage([]); setSideBarMessage([]) }}>
                        <FiEdit />
                    </div>

                </div>


                {/* Nav end */}


                <LeftSectionMain />


                {/* FooterSection */}

                <div className='flex gap-2  ml-4 p-2 items-center absolute bottom-2 cursor-pointer  transition-colors duration-150 rounded-md hover:bg-[#212121]'>
                    <div className='p-1 border border-gray-500 rounded-full'>
                        < FaWhmcs />
                    </div>
                    <div className='flex flex-col gap-[2px] '>
                        <p>Upgrade plan</p>
                        <p className='sm:text-sm text-xs text-[#b4b4b4]'>Get GPT-4, DALL·E, and more</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default LeftSection