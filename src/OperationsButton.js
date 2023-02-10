function OperationsButton({ typefunction, operation, dispatch, className }) {
  return (
    <button
      className={className}
      onClick={() =>
        dispatch({
          type: typefunction,
          payload: { operation },
        })
      }
    >
      {operation}
    </button>
  );
}

export default OperationsButton;
