import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [test123, setState] = React.useState(456);
  const test = () => {
    if (test123 === 456) {
      setState(123);
    }
    alert(test123);
  };

  return (
    <div className="App">
      <header className="App-header">
        {test123}
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={test}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          style={{ background: "blue" }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          yhdtest
        </a>
      </header>
    </div>
  );
}

export default App;
