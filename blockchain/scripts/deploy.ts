import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const adhikaar = await ethers.deployContract("Adhikaar", [], {});

  await adhikaar.waitForDeployment();

  console.log(
    `Adhikaar timestamp ${unlockTime} deployed to ${adhikaar.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
