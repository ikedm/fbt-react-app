import fbt, {init} from 'fbt';
import React from 'react';
import logo from './logo.svg';
import './App.css';

init({translations: require('./translatedFbts.json')});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fbt desc="Text desc">Learn React</fbt>
        </a>
      </header>
    </div>
  );
}

export default App;
