import React, { useState } from 'react';
import Web3 from 'web3';
import { Abi } from './Abi.js';
import logo from './logo.svg';
import './App.css';

const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0xEe...";
const SpotifyContract = new web3.eth.Contract(Abi, contractAddress);
const App = () => {
  return (
    <div className="App">
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
      </header>
    </div>
  );
}

export default App;
