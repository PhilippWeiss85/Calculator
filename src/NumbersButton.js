import { ACTIONS } from "./App.js";

function NumbersButton({ digit, dispatch, className }) {
  return (
    <button
      className={className}
      onClick={() => dispatch({ type: ACTIONS.NUMBER, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default NumbersButton;
