import React from "react";
import { useState } from "react";

import { ACTIONS } from "../App";


const DigitButton = ({digit,dispatch}) => {

    const [active,setActive] = useState("not")

    const activeBtn="shadow-2xl rounded-full bg-[#B2FADD] w-[3rem] h-[3rem] text-2xl text-center shadow-2xl shadow-white"
    const btn=" rounded-full bg-[#B2FADD] w-[3rem] h-[3rem] text-2xl text-center shadow-2xl shadow-white"

    function ClickedMouse() {
        setActive("clicked");
        dispatch({type:ACTIONS.ADD_DIGIT , payload: {digit}})
        
    }
    function mouse(){
        setActive("not")
    }

    function digitClicked() {
        
    }

    return (
        <div className={` shadow-2xl shadow-white shadow-inner ${active=="clicked" ?"bg-[#69FFC4]" :'bg-[#B2FADD]'} flex justify-center items-center w-[5rem] h-[5rem]  cursor-pointer`}
        onMouseDown={ClickedMouse}
        onMouseUp={mouse}
        onClick={digitClicked}>
            <button 
                className={`${active==="clicked" ? activeBtn : btn}`} 
            >
                {digit}
            </button>
        </div>
    )
}

export default DigitButton;