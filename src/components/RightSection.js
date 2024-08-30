import React, { useCallback, useState } from 'react';
import letterM from '../assets/letter-m.png';
import { FiChevronDown } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import { LiaSquarespace } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";
import { useGptContext } from '../context/ContextapiProvider';
import RightMainSection from './RightMainSection'
import '../App.css';


const YOUR_API_KEY = "AIzaSyCMCcSMYZFPk3baoMrHz4yBqB_5HFrxSAA";
// function Debouncing(inputDataFunc, waitTime) {
//     let timer;

//     return (e) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             inputDataFunc(e);
//         }, waitTime);
//     }
// }


// const handleInputChange = (e) => {
//     setInputField(e.target.value);
//     seetIsDisableInputButton(true);
//     console.log(e.target.value);
// };

// const waitTime = 1000;
// let handleUserData = useCallback(Debouncing(handleInputChange , waitTime) , []);

function RightSection() {
    const [isDataUpload, setisDataUpload] = useState(false);

    const { inputField, handleCopyText, setInputField, setSideBarMessage, isSideBarHidden, handleHiddenToggle, setAllMessage } = useGptContext();

    async function fetchData(message) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${YOUR_API_KEY}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: message }] }]
                })
            });

            const data = await response.json();

            return data.candidates[0].content.parts[0].text;

        } catch (e) {
            console.log("Error", e);
        }

    }


    const handleUserData = (e) => {
        setInputField(e.target.value);
        console.log(e.target.value);
    };

    async function sendData() {
        const data = await fetchData(inputField);
        setSideBarMessage((prev) => ([
            ...prev, data.substring(0, 20)
        ]));

        let updatedData = data.split('**').join(' ');


        updatedData = updatedData.split(' ');

        let currentText = '';

        for (let i = 0; i < updatedData.length; i++) {
            setTimeout(() => {

                currentText += updatedData[i] + " ";
                setAllMessage(prev => {
                    let updateMssage = [...prev];
                    updateMssage[updateMssage.length - 1].system = currentText;
                    return updateMssage;
                });

            }, 75 * i);
        }
    }


    function handleUploadData() {
        setInputField('');
        setisDataUpload(true);
        setAllMessage(prev => [
            ...prev,
            {
                user: inputField,
                system: "Loading..."
            }
        ]);

        sendData();
    }


    return (
        <div className='h-screen relative  overflow-hidden bg-[#212121] w-screen text-white'>

            {/* NavBar start */}

            <div className=' absolute top-0 left-0 right-3 flex justify-between  bg-[#212121] z-20 items-center px-4 py-2'>

                <div className='md:hidden' onClick={handleHiddenToggle} >
                    <RxHamburgerMenu className='cursor-pointer' />
                </div>

                <div className={`md:gap-5 flex items-center text-[#b4b4b4] h-8`}>
                    {
                        isSideBarHidden &&
                        <>
                            <div className='cursor-pointer p-2 transition-colors hidden md:block  duration-150 text-xl rounded-md hover:bg-[#212121]' onClick={handleHiddenToggle}>
                                <CgWebsite />
                            </div>

                            <div className='cursor-pointer hidden md:block text-lg rounded-md hover:bg-[#212121] transition-colors duration-150'>
                                <FiEdit />
                            </div>
                        </>
                    }

                    <div className='flex gap-1 items-center p-2 cursor-pointer rounded-md hover:bg-[#212121] transition-colors duration-150'>
                        <div className='font-bold md:text-lg text-md'>ChatGPT</div>
                        <div className='cursor-pointer text-[#9b9b9b]'> <FiChevronDown /> </div>
                    </div>

                </div>

                <div className='relative'>
                    <img className='w-9 cursor-pointer md:block hidden rounded-full p-1 hover:bg-[#212121] transition-colors duration-150' src={letterM} alt="Letter M" />
                    <div className=' md:hidden cursor-pointer ' onClick={() => { setAllMessage([]); setSideBarMessage([]) }}><FiEdit /></div>
                </div>

            </div>

            {/* NavBar End */}

            {/* main Section */}

            <RightMainSection handleCopyText={handleCopyText} />

            {/* main Section  end*/}


            <div className='flex flex-col gap-3 absolute left-1/2 -translate-x-[50%] sm:w-[78%] w-[88%] md:w-[50rem] z-10 bottom-1'>
                <div className='flex gap-4 border border-[#424242] rounded-full  items-center h-[4rem]'>


                    <div className='text-white text-2xl px-3'>
                        <LiaSquarespace />
                    </div>

                    <div className='grow overflow-hidden '>

                        <textarea contentEditable="true" className='w-[100%] bg-[#2f2f2f]  overflow-y-auto outline-none bg-transparent custom-scrollbar resize-none h-[50px] py-[13px] ' placeholder="Message ChatGPT" value={inputField} onInput={handleUserData} ></textarea>
                        
                        
                    </div>


                    <div className='px-3'>
                        <button className={`text-white text-2xl cursor-pointer ${!inputField ? 'opacity-50 ' : "opacity-100"} `} disabled={!inputField} onClick={handleUploadData}>
                            <LuUpload />
                        </button>
                    </div>

                </div>

                <div>
                    <p className='text-center text-sm text-[#b4b4b4]'> ChatGPT can make mistakes. Check important info.</p>

                </div>
            </div>



        </div>
    );
}

export default RightSection;
