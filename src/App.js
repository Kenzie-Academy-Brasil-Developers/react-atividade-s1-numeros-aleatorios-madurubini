import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100 + 1));

  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Get a Random Number from 1 to 100</h2>
        <p>Click the button below and enjoy the experience</p>
        <div className="Card">
          <div>{number}</div>
          <button onClick={randomNumber}> Get a Random Number</button>
        </div>
      </header>
    </div>
  );
}

export default App;
