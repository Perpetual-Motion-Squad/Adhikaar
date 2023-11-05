// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Adhikaar {
  address public electionCommission;
  bool public electionStarted;

  struct Party {
    bytes32 id;
    uint256 votes;
  }

  enum VoterStatus {
    UNKNOWN,
    REGISTERED,
    VOTED
  }

  mapping(address => VoterStatus) public registeredVoters;
  address[] public voterList;
  mapping(bytes32 => Party) public parties;
  bytes32[] public partyNames;

  modifier onlyOwner() {
    require(msg.sender == electionCommission, "Only the owner can call this function");
    _;
  }

  modifier onlyDuringElection() {
    require(electionStarted, "Election has not started yet");
    _;
  }

  constructor() {
    electionCommission = msg.sender;
    electionStarted = false;
  }

  function initializeElection(bytes32[] memory _partyNames) public onlyOwner {
    require(!electionStarted, "Election has already started");
    require(_partyNames.length > 1, "At least two parties are required");

    for (uint256 i = 0; i < _partyNames.length; i++) {
      require(!partyExists(_partyNames[i]), "Party name must be unique");
      parties[_partyNames[i]] = Party(_partyNames[i], 0);
      partyNames.push(_partyNames[i]);
    }

    electionStarted = true;
  }

  /** allow only if we are unknown */
  function registerVoter() public onlyDuringElection {
    require (registeredVoters[msg.sender] != VoterStatus.REGISTERED && registeredVoters[msg.sender] != VoterStatus.VOTED, "You are already registered");
    registeredVoters[msg.sender] = VoterStatus.REGISTERED;
    voterList.push(msg.sender);
  }

  function canVote() public onlyDuringElection view returns (bool) {
    return registeredVoters[msg.sender] == VoterStatus.REGISTERED;
  }

  function vote(bytes32 _partyName) public onlyDuringElection {
    require(registeredVoters[msg.sender] == VoterStatus.REGISTERED, "You are not registered to vote");
    require(electionStarted, "Election has not started yet");
    require(partyExists(_partyName), "Invalid party");

    parties[_partyName].votes++;
    registeredVoters[msg.sender] = VoterStatus.VOTED;
  }

  function endElection() public onlyOwner {
    require(electionStarted, "Election has not started yet");
    electionStarted = false;
  }

  function clearElection() public onlyOwner {
    require(!electionStarted, "Election is still in progress");
    for (uint256 i = 0; i < partyNames.length; i++) {
      parties[partyNames[i]] = Party(partyNames[i], 0);
    }
    delete partyNames;
    for (uint256 i = 0; i < voterList.length; i++) {
      registeredVoters[voterList[i]] = VoterStatus.UNKNOWN;
    }
    delete voterList;
  }

  function getPartyVotes(bytes32 _partyName) public view returns (uint256) {
    require(partyExists(_partyName), "Invalid party");
    return parties[_partyName].votes;
  }

  function getPartyNamesCount() public view returns (uint256) {
    return partyNames.length;
  }

  function getPartyNameAtIndex(uint256 _index) public view returns (bytes32) {
    require(_index < partyNames.length, "Invalid index");
    return partyNames[_index];
  }

  function isElectionInProgress() public view returns (bool) {
    return electionStarted;
  }

  function partyExists(bytes32 _partyName) internal view returns (bool) {
    return parties[_partyName].id != bytes32(0);
  }

  function getRegisteredVotersCount() public view returns (uint256) {
    return voterList.length;
  }
}
