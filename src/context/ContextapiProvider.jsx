import { gptContext } from "./Contextapi";
import { useState, useContext } from "react";

export function GptContextProvider({ children }) {
    const [sideBarMessagede, setSideBarMessage] = useState([]);
    const [isSideBarHidden, setIsSideBarHidden] = useState(true);
    const [allMessage, setAllMessage] = useState([]);
    const [isTextCopy , setTextCopy]  = useState({});
    const [inputField, setInputField ] = useState('');

    function handleHiddenToggle() {

        setIsSideBarHidden(!isSideBarHidden)
    }


    function handleStaticMessgaeList(eventObject) {
        if (eventObject.target.tagName === 'P') {
            setInputField(eventObject.target.innerText);
        }
    }


    function handleCopyText(index, text) {

        setTextCopy(true);

        setTextCopy((prev) => ({
            ...prev, [index]: true
        }));

        navigator.clipboard.writeText(text);

        setTimeout(() => {
            setTextCopy((prev) => ({
                ...prev, [index]: false
            }));

        }, 4000)

    }

        return (
            <gptContext.Provider value={
                { sideBarMessagede, setSideBarMessage, isSideBarHidden, setIsSideBarHidden, allMessage, setAllMessage, handleCopyText, handleStaticMessgaeList, handleHiddenToggle , isTextCopy, setTextCopy , inputField , setInputField}}
            >
                {children}
            </gptContext.Provider>
        )
    }

    export function useGptContext() {
        return useContext(gptContext);
    }