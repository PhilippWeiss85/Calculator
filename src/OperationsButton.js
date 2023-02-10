import { ACTIONS } from "./App.js";

function OperationsButton({ digit, dispatch, className }) {
  return (
    <button
      className={className}
      onClick={() => dispatch({ type: ACTIONS.ADD, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default OperationsButton;
