import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-local-networks-config-plugin';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
  },
  namedAccounts: {
    deployer: 0,
    // tokenOwner: 1,
  },
};
export default config;



