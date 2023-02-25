import React from "react";
import "./App.css";
import { useReducer } from "react";

import DigitButton from "./component/DigitButton";
import OperatorButton from "./component/OperatorButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete_digit",
  EVALUATE: "evaluate",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand?.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.CHOOSE_OPERATION:
      if (state.previousOperand == null && state.currentOperand == null)
        return state;

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operator,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operator,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operator,
        currentOperand: null,
      };
    case ACTIONS.EVALUATE:
      if (
        state.currentOperand == null ||
        state.previousOperand == null ||
        state.operation == null
      ) {
        return state;
      }

      return {
        ...state,
        currentOperand: evaluate(state),
        previousOperand: null,
        operation: null,
        overwrite: true,
      };
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
  }
};

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }
  return computation.toString();
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );


  return (
    <div className="bg-white w-[20rem] m-auto my-[3rem] border-neutral-700 border-2 ">
      {/*calculator*/}
      <div className=" bg-[#014329] grid grid-col-none h-[6rem] shadow-inner shadow-red-900 text-white">
        <div className="text-right break-words pr-4 h-[3rem] text-lg text-center pt-3 font-semibold ">
          {previousOperand} {operation}
        </div>
        <div className="text-right break-words w-[20rem] h-[3rem] text-2xl pr-4 text-center font-bold">
          {currentOperand}
        </div>
      </div>
      <div className="pt-[0.2rem] border-t-neutral-700 border-2 grid grid-cols-4 gap-0 place-items-center gap-y-[0.2rem]">
        <OperatorButton
          operator={"AC"}
          classes="col-span-2 w-[10rem]"
          dispatch={dispatch}
        />
        <OperatorButton operator={"DEL"} dispatch={dispatch} />
        <OperatorButton operator={"÷"} dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperatorButton operator={"x"} dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperatorButton operator={"+"} dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperatorButton operator={"-"} dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <OperatorButton
          operator={"="}
          classes="col-span-2 w-[10rem]"
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default App;
