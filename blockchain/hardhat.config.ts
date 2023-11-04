import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

console.log("Deploying...", process.env.OWNER_PRIVATE_KEY?.length);

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`${process.env.OWNER_PRIVATE_KEY}`],
    },
  },
};

export default config;
