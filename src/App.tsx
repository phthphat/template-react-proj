import React, { useEffect, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';

const App = () => {
  console.log("App rendered")
  let [notice, setNotice] = useState("No notice")
  let turn = 1
  return (
    <div className="App">
      <div>
        {notice}
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={
          () => {
            console.log(`turn: ${turn}`)
            turn += 1
            setNotice(turn % 2 == 0 ? "Ahihihi" : "Ahuhuhu")
          }
        }></Button>
      </header>
      <section>
      </section>
    </div>
  );
}

export default React.memo(App);
