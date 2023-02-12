import "./App.css";
import OperationsButton from "./OperationsButton";
import NumbersButton from "./NumbersButton";
import { useReducer } from "react";

export const ACTIONS = {
  ADD_DIGIT: "add_digit",
  CHOOSE_OPERATION: "operation",
  CLEAR: "clear",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "," && state.currentOperand.includes(","))
        return state;
      //  if (payload.digit === "," && state.currentOperand.substring(1) === ",")
      //  return "0" + state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        previousOperand: state.currentOperand,
        operation: payload.operation,
        currentOperand: null,
      };
    default:
      return state;
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  console.log(currentOperand, previousOperand, operation);

  return (
    <section className="grid">
      <article className="grid__output">
        <div>{currentOperand}</div>
      </article>
      <OperationsButton
        className="grid__operands-darkgrey"
        dispatch={dispatch}
        operation="AC"
        typefunction={ACTIONS.CLEAR}
      />
      <OperationsButton
        className="grid__operands-darkgrey"
        dispatch={dispatch}
        operation="+/_"
        typefunction={ACTIONS.CHOOSE_OPERATION}
      />
      <OperationsButton
        className="grid__operands-darkgrey"
        dispatch={dispatch}
        operation="%"
        typefunction={ACTIONS.CHOOSE_OPERATION}
      />
      <OperationsButton
        dispatch={dispatch}
        operation="÷"
        className="grid__operands-orange"
        typefunction={ACTIONS.CHOOSE_OPERATION}
      />
      <NumbersButton dispatch={dispatch} digit="7" />
      <NumbersButton dispatch={dispatch} digit="8" />
      <NumbersButton dispatch={dispatch} digit="9" />
      <OperationsButton
        dispatch={dispatch}
        operation="x"
        className="grid__operands-orange"
        typefunction={ACTIONS.CHOOSE_OPERATION}
      />
      <NumbersButton dispatch={dispatch} digit="4" />
      <NumbersButton dispatch={dispatch} digit="5" />
      <NumbersButton dispatch={dispatch} digit="6" />
      <OperationsButton
        dispatch={dispatch}
        operation="x"
        className="grid__operands-orange"
        typefunction={ACTIONS.CHOOSE_OPERATION}
      />
      <NumbersButton dispatch={dispatch} digit="1" />
      <NumbersButton dispatch={dispatch} digit="2" />
      <NumbersButton dispatch={dispatch} digit="3" />
      <OperationsButton
        dispatch={dispatch}
        operation="+"
        className="grid__operands-orange"
        typefunction={ACTIONS.CHOOSE_OPERATION}
      />
      <NumbersButton
        dispatch={dispatch}
        digit="0"
        className="grid__span-two grid__bottom-border-left"
      />
      <NumbersButton dispatch={dispatch} digit="," />
      <NumbersButton
        dispatch={dispatch}
        digit="="
        className="grid__bottom-border-right grid__operands-orange"
      />
    </section>
  );
}

export default App;
