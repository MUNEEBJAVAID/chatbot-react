import React, { useState } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { LuCopyCheck } from "react-icons/lu";
import ChatgptIcon from '../assets/chatgpt.svg'
import { LuImagePlus } from "react-icons/lu";
import { IoIosCreate } from "react-icons/io";
import { GiAirplaneDeparture } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { useGptContext } from '../context/ContextapiProvider';
import letterM from '../assets/letter-m.png';

function RightMainSection() {


    const { allMessage, handleStaticMessgaeList, handleCopyText, isTextCopy } = useGptContext();

    return (
        <>
            {allMessage.length === 0 && <div className='py-[4rem] md:px-[8rem] px-[4rem] justify-center content-center h-screen' onClick={handleStaticMessgaeList}>

                <div className='flex flex-col items-center gap-[3rem] '>

                    <div>
                        <img className=' slow-spin w-14 cursor-pointer  rounded-full p-1 ' src={ChatgptIcon} alt="ChatgptIcon" />
                    </div>

                    <div className='flex gap-4 justify-center flex-wrap-reverse  cursor-pointer'>
                        <div className='border-2 rounded-2xl p-3 w-40 border-[#424242]  hover:bg-[#424242] transition-colors duration-150'>
                            <div className='text-blue-400 text-lg mb-3'><LuImagePlus /></div>
                            <p className='text-gray-400 '> Create an Image for my presentation </p>
                        </div>

                        <div className='border-2  rounded-2xl p-3 w-40  cursor-pointer border-[#424242]  hover:bg-[#424242] transition-colors duration-150 '>
                            <div className='text-yellow-400 text-lg mb-3'><GiAirplaneDeparture /></div>
                            <p className='text-gray-400 '> Plain an Realxing day </p>
                        </div>


                        <div className='border-2  rounded-2xl p-3 w-40 sm:block hidden  cursor-pointer border-[#424242]  hover:bg-[#424242] transition-colors duration-150'>
                            <div className='text-blue-400 text-lg mb-3'>< IoIosCreate /></div>
                            <p className='text-gray-400 '> Study vocubalary </p>
                        </div>

                        <div className='border-2  rounded-2xl p-3  w-40  cursor-pointer border-[#424242]  hover:bg-[#424242] transition-colors duration-150'>
                            <div className='text-yellow-400 text-lg mb-3'><HiOutlineLightBulb /></div>
                            <p className='text-gray-400 '> What to do with Kid's art </p>
                        </div>

                    </div>

                </div>





            </div>}

            {allMessage.length > 0 &&
                <div className='py-[4rem] md:px-[8rem] sm:px-[2rem]  px-[1rem] overflow-y-auto h-[80%] custom-scrollbar'>
                    {
                        allMessage.map((message, index) => (
                            <div keys={index} className='flex flex-col gap-4 sm:my-5 my-7'>
                                <div className='relative flex items-start gap-2 '>
                                    <div className=' absolute hidden sm:block'>
                                        <img className='w-9 rounded-full p-1' src={letterM} alt="Letter M" />
                                    </div>
                                    <p className='mx-2 sm:mx-[3.1rem] bg-[#2f2f2f] py-2 px-5 rounded-2xl'>{message.user}</p>
                                </div>

                                <div className='relative flex ml-1 gap-1 items-start'>
                                    <div className=' hidden sm:block absolute p-1 border border-gray-500 rounded-full '>
                                        <img className=' w-5 rounded-full' src={ChatgptIcon} alt="ChatgptIcon" />
                                    </div>

                                    {message.system !== "Loading..." ? <div className='bg-black sm:mx-[3.1rem] mx-2 rounded-lg max-h-[20rem] overflow-y-auto  custom-scrollbar relative'>

                                        <div className='flex items-center justify-between px-3 bg-[#2f2f2f] rounded-tl-lg rounded-tr-lg py-2 sticky top-0  z-10' >

                                            <div className='text-sm text-gray-300' > ChatGPT </div>

                                            <div className='flex items-center gap-1'>
                                                <div className='text-sm  cursor-pointer' onClick={() => handleCopyText(index, message.system)}>{!isTextCopy[index] ? <IoCopyOutline /> : <LuCopyCheck />}</div>
                                                {<p className='text-sm text-gray-300 '>{!isTextCopy[index] ? "Copy text" : "Copied"}</p>}
                                            </div>
                                        </div>
                                        <p className='px-4 my-4' style={{ whiteSpace: 'pre-wrap' }}>
                                            {
                                                message.system
                                            }
                                        </p>
                                    </div> : <p className='sm:mx-12 ml-4'>{message.system}</p>}

                                </div>

                            </div>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default RightMainSection