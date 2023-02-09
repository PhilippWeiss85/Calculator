import "./App.css";

function App() {
  return (
    <section className="grid">
      <article className="grid__output">12321451</article>
      <button className="grid__operands-darkgrey">AC</button>
      <button className="grid__operands-darkgrey">+/_</button>
      <button className="grid__operands-darkgrey">%</button>
      <button className="grid__operands-orange">...</button>
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
      <button className="grid__operands-orange">+</button>
      <button className="grid__span-two grid__bottom-border-left">0</button>
      <button>,</button>
      <button className="grid__bottom-border-right grid__operands-orange">
        =
      </button>
    </section>
  );
}

export default App;
