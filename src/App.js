import "./App.css";
import OperationsButton from "./OperationsButton";
import NumbersButton from "./NumbersButton";
import { useReducer } from "react";

export const ACTIONS = {
  ADD_DIGIT: "add_digit",
  CHOOSE_OPERATION: "operation",
  CLEAR: "clear",
  EVALUATE: "evaluate",
  DEFECT: "defect",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite === true) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }

      if (state.defect === true) {
        return {
          currentOperand: payload.digit,
          defect: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "," && state.currentOperand.includes(",")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.DEFECT:
      return {
        defect: true,
        currentOperand: "This action is currently not working",
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: state.currentOperand,
        operation: payload.operation,
        currentOperand: evaluate(state),
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
}

function evaluate({ previousOperand, currentOperand, operation }) {
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  console.log(previous);
  console.log(current);
  if (isNaN(previous) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = previous + current;
      break;
    case "-":
      computation = previous - current;
      break;
    case "x":
      computation = previous * current;
      break;
    case "÷":
      computation = previous / current;
      break;
  }
  console.log(computation);
  return computation;
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  console.log("currentoperand", currentOperand);
  console.log("previousOperand", previousOperand);
  console.log("operation", operation);

  return (
    <section className="grid">
      <article className="grid__output">
        <div>{currentOperand}</div>
      </article>
      <button
        className="grid__operands-darkgrey"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        operation="AC"
      >
        AC
      </button>
      <button
        className="grid__operands-darkgrey"
        onClick={() => dispatch({ type: ACTIONS.DEFECT })}
        operation="+/_"
      >
        +/_
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.DEFECT })}
        className="grid__operands-darkgrey"
      >
        %
      </button>
      <OperationsButton
        dispatch={dispatch}
        operation="÷"
        className="grid__operands-orange"
      />
      <NumbersButton dispatch={dispatch} digit="7" />
      <NumbersButton dispatch={dispatch} digit="8" />
      <NumbersButton dispatch={dispatch} digit="9" />
      <OperationsButton
        dispatch={dispatch}
        operation="x"
        className="grid__operands-orange"
      />
      <NumbersButton dispatch={dispatch} digit="4" />
      <NumbersButton dispatch={dispatch} digit="5" />
      <NumbersButton dispatch={dispatch} digit="6" />
      <OperationsButton
        dispatch={dispatch}
        operation="-"
        className="grid__operands-orange"
      />
      <NumbersButton dispatch={dispatch} digit="1" />
      <NumbersButton dispatch={dispatch} digit="2" />
      <NumbersButton dispatch={dispatch} digit="3" />
      <OperationsButton
        dispatch={dispatch}
        operation="+"
        className="grid__operands-orange"
      />
      <NumbersButton
        dispatch={dispatch}
        digit="0"
        className="grid__span-two grid__bottom-border-left"
      />
      <NumbersButton dispatch={dispatch} digit="," />
      <button
        operation="="
        className="grid__bottom-border-right grid__operands-orange"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
    </section>
  );
}

export default App;
