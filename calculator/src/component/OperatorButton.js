import React from "react";
import { useState } from "react";
import { ACTIONS } from "../App";

const OperatorButton = ({operator,classes="",dispatch}) => {
    const [active,setActive] = useState("not")

    const activeBtn=" shadow-2xl rounded-full bg-[#B2FADD] w-[3rem] h-[3rem] text-2xl text-center shadow-2xl shadow-red-100"
    const btn=" rounded-full bg-[#B2FADD] w-[3rem] h-[3rem] text-2xl text-center shadow-2xl shadow-red-100"

    function ClickedMouse() {
        setActive("clicked");
    }
    function mouse(){
        setActive("not")
    }

    function operatorClicked(){
        if (operator==="AC"){
            dispatch({type:ACTIONS.CLEAR})
        }
        else if (operator==="DEL"){
            dispatch({type:ACTIONS.DELETE_DIGIT})
        }
        else if (operator === "="){
            dispatch({type: ACTIONS.EVALUATE})
        }
        else {
            dispatch({type:ACTIONS.CHOOSE_OPERATION , payload:{operator}})
        }
    }
    

    return (
        <div className={`${classes || "w-[5rem]"} ${active=="clicked" ?"bg-[#69FFC4]" :'bg-[#B2FADD]'} flex justify-center items-center   h-[5rem] cursor-pointer shadow-inner shadow-white`} onMouseDown={ClickedMouse}
        onMouseUp={mouse} onClick={operatorClicked}>
            <button 
                className={`${active==="clicked" ? activeBtn : btn}`} 
            >
                {operator}
            </button>
        </div>
    )
}

export default OperatorButton;