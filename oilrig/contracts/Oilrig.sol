pragma solidity >=0.4.21 <0.7.0;

contract Oilrig {
  string miner;


  constructor() public {
    miner = "Roko";
  }

  function getMiner() public view returns(string memory) {
    return miner;
  }


  function setMiner(string memory _miner) public {
    miner = _miner;
  }
}