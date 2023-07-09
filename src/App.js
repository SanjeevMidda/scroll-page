import { useState } from "react";
import "./index.css";

function App() {
  const [option, setOption] = useState(0);
  const [direction, setDirection] = useState("down");

  if (option > 2) {
    setOption(0);
  }

  let styles = {
    animation: direction === "down" ? `down 1s` : `up 1s`,
  };
  return (
    <div className="App">
      <div
        className="up"
        onClick={() => {
          setOption(option - 1);
          setDirection("up");
        }}
      >
        <h1>UP</h1>
      </div>

      <div
        className="down"
        onClick={() => {
          setOption(option + 1);
          setDirection("down");
        }}
      >
        <h1>DOWN</h1>
      </div>

      {option === 0 && (
        <div className="one" style={styles}>
          <h2>🐭</h2>
        </div>
      )}

      {option === 1 && (
        <div className="two" style={styles}>
          <h2>🌍</h2>
        </div>
      )}

      {option === 2 && (
        <div className="three" style={styles}>
          <h2>🐹</h2>
        </div>
      )}
    </div>
  );
}

export default App;
