import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const test=()=>{alert('123')}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={test}> 
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
        style={{background:'blue'}}
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
