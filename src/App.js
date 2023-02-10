import "./App.css";
import OperationsButton from "./OperationsButton";
import NumbersButton from "./NumbersButton";
import { useReducer } from "react";

export const ACTIONS = {
  ADD: "add",
  SUBSTRACT: "substract",
  DIVIDE: "divide",
  MULTIPLY: "multiply",
  CLEAR: "clear",
  NUMBER: "number",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.NUMBER:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CLEAR:
      return {};
    default:
      return state;
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <section className="grid">
      <article className="grid__output">
        <div>{currentOperand}</div>
      </article>
      <OperationsButton
        className="grid__operands-darkgrey"
        dispatch={dispatch}
        digit="AC"
        actiontype="CLEAR"
      />
      <OperationsButton
        className="grid__operands-darkgrey"
        dispatch={dispatch}
        digit="+/_"
        actiontype="ADD"
      />
      <OperationsButton
        className="grid__operands-darkgrey"
        dispatch={dispatch}
        digit="%"
        actiontype="DIVIDE"
      />
      <OperationsButton
        dispatch={dispatch}
        digit="÷"
        className="grid__operands-orange"
        actiontype="DIVIDE"
      />
      <NumbersButton dispatch={dispatch} digit="7" />
      <NumbersButton dispatch={dispatch} digit="8" />
      <NumbersButton dispatch={dispatch} digit="9" />
      <OperationsButton
        dispatch={dispatch}
        digit="x"
        className="grid__operands-orange"
        actiontype="MULTIPLY"
      />
      <NumbersButton dispatch={dispatch} digit="4" />
      <NumbersButton dispatch={dispatch} digit="5" />
      <NumbersButton dispatch={dispatch} digit="6" />
      <OperationsButton
        dispatch={dispatch}
        digit="x"
        className="grid__operands-orange"
        actiontype="SUBSTRACT"
      />
      <NumbersButton dispatch={dispatch} digit="1" />
      <NumbersButton dispatch={dispatch} digit="2" />
      <NumbersButton dispatch={dispatch} digit="3" />
      <OperationsButton
        dispatch={dispatch}
        digit="+"
        className="grid__operands-orange"
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
