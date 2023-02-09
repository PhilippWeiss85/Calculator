import "./App.css";
import "./components/Button.css";
import { useReducer } from "react";

const OPERANDS = {
  ADD: "add",
  SUBSTRACT: "substract",
  DIVIDE: "divide",
  MULTIPLY: "multiply",
};

function reducer(state, action) {
  switch (action.type) {
    case OPERANDS.ADD:
      return { count: state.count + 1 };
    case OPERANDS.SUBSTRACT:
      return state.count - 1;
    case OPERANDS.DIVIDE:
      return state + 13;
    case OPERANDS.MULTIPLY:
      return state - 13;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  function add() {
    dispatch({ type: OPERANDS.ADD });
  }
  function substract() {
    dispatch({ type: OPERANDS.SUBSTRACT });
  }
  function divide() {
    dispatch({ type: OPERANDS.DIVIDE });
  }
  function multiply() {
    dispatch({ type: OPERANDS.MULTIPLY });
  }
  function reset() {
    dispatch();
  }

  return (
    <section className="grid">
      <article className="grid__output">{state.count}</article>
      <button className="grid__operands-darkgrey">AC</button>
      <button className="grid__operands-darkgrey">+/_</button>
      <button className="grid__operands-darkgrey">%</button>
      <button className="grid__operands-orange">÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="grid__operands-orange">x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="grid__operands-orange">-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button onClick={add} className="grid__operands-orange">
        +
      </button>
      <button className="grid__span-two grid__bottom-border-left">0</button>
      <button>,</button>
      <button className="grid__bottom-border-right grid__operands-orange">
        =
      </button>
    </section>
  );
}

export default App;
