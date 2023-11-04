// Import necessary modules from Hardhat
import { expect } from "chai";
import { ethers } from "hardhat";
import type { Adhikaar__factory } from "../typechain-types";
import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("Adhikaar", function () {
  let Adhikaar: Adhikaar__factory;
  let adhikaar: Awaited<ReturnType<Adhikaar__factory["deploy"]>>;
  let owner: HardhatEthersSigner;
  let user1: HardhatEthersSigner;
  let user2: HardhatEthersSigner;
  const partyNames = [
    ethers.encodeBytes32String("PartyA"),
    ethers.encodeBytes32String("PartyB"),
  ];

  // Deploy the contract before each test
  beforeEach(async function () {
    Adhikaar = await ethers.getContractFactory("Adhikaar");
    [owner, user1, user2] = await ethers.getSigners();

    adhikaar = await Adhikaar.deploy();
    // await adhikaar.deployed();
  });

  it("should initialize the election with parties", async function () {
    await adhikaar.connect(owner).initializeElection(partyNames);

    expect(await adhikaar.getPartyNamesCount()).to.equal(2);
  });

  it("should allow users to register and vote during the election", async function () {
    await adhikaar.connect(owner).initializeElection(partyNames);

    // Register users
    await adhikaar.connect(user1).registerVoter();
    await adhikaar.connect(user2).registerVoter();

    // Vote for PartyA from user1
    await adhikaar.connect(user1).vote(partyNames[0]);

    // Vote for PartyB from user2
    await adhikaar.connect(user2).vote(partyNames[1]);

    expect(await adhikaar.getPartyVotes(partyNames[0])).to.equal(1);
    expect(await adhikaar.getPartyVotes(partyNames[1])).to.equal(1);
  });

  it("should not allow voting before the election starts or after it ends", async function () {
    await adhikaar.connect(owner).initializeElection(partyNames);

    // Register users
    await adhikaar.connect(user1).registerVoter();

    await adhikaar.connect(owner).endElection();

    await expect(
      adhikaar.connect(user1).vote(partyNames[0]),
    ).to.be.revertedWith("Election has not started yet");
  });
});
