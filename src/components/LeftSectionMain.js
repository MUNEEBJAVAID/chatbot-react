import React from 'react'
import ChatgptIcon from '../assets/chatgpt.svg'
import { useGptContext } from '../context/ContextapiProvider';
import { HiOutlineQrCode } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";

function LeftSectionMain() {
    const { sideBarMessagede } = useGptContext();

    return (
        <div className='py-14 px-3 '>
            <div >
                <div className='cursor-pointer  p-2 flex justify-between  items-center rounded-md hover:bg-[#212121] transition-colors duration-150 group'>

                    <div className='flex items-center gap-3'>
                        <img src={ChatgptIcon} className='w-5 ' />
                        <p>Chatgpt</p>
                    </div>

                    <div className='text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-opacity duration-150  hover:text-[#dfdddd]'>
                        <FiEdit />
                    </div>

                </div>

                <div className='flex items-center cursor-pointer gap-2 p-2 rounded-md hover:bg-[#212121] transition-colors duration-150'>
                    <div>
                        <HiOutlineQrCode className='text-2xl text-[#b4b4b4]' />
                    </div>
                    <p>Expolor</p>
                </div>
            </div>

            <div className='p-2'>
                <h2 className=' border-red-500 my-3'>Recently</h2>
                <div className='flex flex-col gap-1'>
                    {
                        sideBarMessagede.map((message, index) => {
                            return <div className='relative hover:bg-[#212121] rounded-lg transition-colors cursor-pointer duration-150 sm:text-xl text-sm p-2 group'>
                                <p key={index}> {message} </p>
                                <span className='absolute top-1 tracking-[0.2rem] shadow-md border-x-slate-600 opacity-0 right-1 group-hover:opacity-100 transition-opacity duration-150'>...</span>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LeftSectionMain