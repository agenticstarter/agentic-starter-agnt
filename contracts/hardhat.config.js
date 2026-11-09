// DEPLOYER_PRIVATE_KEY etc. can live in contracts/.env
try { process.loadEnvFile(".env"); } catch { /* no .env */ }
require("@nomicfoundation/hardhat-toolbox");
const path = require("path");
const { subtask } = require("hardhat/config");
const { TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD } = require("hardhat/builtin-tasks/task-names");

// Use the solc-js compiler shipped through npm, so builds work on machines
// (and CI runners) that cannot reach binaries.soliditylang.org.
subtask(TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD, async (args, hre, runSuper) => {
  if (args.solcVersion === "0.8.24") {
    const compilerPath = path.join(__dirname, "node_modules", "solc", "soljson.js");
    return { compilerPath, isSolcJs: true, version: args.solcVersion, longVersion: "0.8.24+commit.e11b9ed9" };
  }
  return runSuper();
});

// accepts the key with or without the 0x prefix (wallets export both forms)
const RAW_PK = (process.env.DEPLOYER_PRIVATE_KEY || "").trim();
const PK = RAW_PK ? (RAW_PK.startsWith("0x") ? RAW_PK : `0x${RAW_PK}`) : undefined;
// BNB Chain nodes reject a priority fee below their minimum (testnet: 0.1 gwei), and Hardhat's estimate can be lower.
// A fixed legacy gas price avoids that. GAS_PRICE_GWEI overrides it; mainnet uses the node's price unless set.
const gwei = (v) => Math.round(Number(v) * 1e9);
const GAS = process.env.GAS_PRICE_GWEI;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: { optimizer: { enabled: true, runs: 200 }, viaIR: false, evmVersion: "cancun" },
  },
  networks: {
    hardhat: {
      chainId: 31337,
      accounts: { count: 120 },
      ...(process.env.HH_INITIAL_DATE ? { initialDate: process.env.HH_INITIAL_DATE } : {}),
    },
    localhost: { url: "http://127.0.0.1:8545", chainId: 31337 },
    bscTestnet: {
      url: process.env.BSC_TESTNET_RPC || "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      accounts: PK ? [PK] : [],
      gasPrice: gwei(GAS || 1),
    },
    bsc: {
      url: process.env.BSC_RPC || "https://bsc-dataseed.bnbchain.org",
      chainId: 56,
      accounts: PK ? [PK] : [],
      ...(GAS ? { gasPrice: gwei(GAS) } : {}),
    },
  },
  // Etherscan API v2: one key (etherscan.io → API Keys) works for BscScan mainnet and testnet.
  etherscan: { apiKey: process.env.ETHERSCAN_API_KEY || process.env.BSCSCAN_API_KEY || "" },
  gasReporter: { enabled: false },
};
