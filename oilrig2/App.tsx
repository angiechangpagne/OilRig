import React, { Component } from 'react';
import Web3 from 'web3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isConnected: false, peers: 0, version: '' };
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }

  componentWillMount() {
    if(this.web3 && this.web3.isConnected()) {
      this.setState({isConnected: true});
    }
  }

  render() {
    return (
      <div>
        <h2> Connected?: </h2>
        {this.state.isConnected?'Connected':'Not Connected'}
      </div>
    );
  }
}

export default App;