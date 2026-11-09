// Public addresses and launch settings per network. No secrets here: private keys live in contracts/.env only.
// Every value can be overridden with the environment variable of the same name (see scripts/deploy.js).
// This file is also the single source of the numbers shown in the docs and on the sites
// (scripts/params.js turns it into params.json; CI fails when docs or UI hard-code a different number).

const WALLETS = {
  TREASURY: "0x71c9e9c496605442F9c1F621D408B38aea9224D2", // Safe 2/2: owner of every contract, receives fees
  TEAM: "0x3D786B833DbAE8D9368747bB438B67003632AAa8", // Safe 2/2: team vesting beneficiary
  ECOSYSTEM: "0x08713C9D631d9cF1e00024c74c2b9C2D40a6a49B", // Safe 2/2: ecosystem & marketing vesting beneficiary
  LIQUIDITY: "0x71913ffeDDa0dC5a7ec0B81E0523A1cB513793E7", // Safe 2/2: 150M liquidity + 60M listing reserve
  COMMUNITY: "0x9b47E94d5Ed35EF07283bC8d177242687051e1cA", // Safe 2/2: 200M airdrop seasons + presale bonus
  GUARDIAN: "0x8090c5CD93E31f6654EB91cdd32c2caC686C7A59", // may pause launches and buys, cancel module proposals
  DEPLOYER: "0xE8D1E1Ae2aC35d9F9c76cB03cF54d6d51484CB45", // runs the deployments, keeps no rights
  LAUNCHER: "0xc96dAd80765b3E19677eEf9258de1e1D0e41465E", // testnet launch bot
  KEEPER: "0x16bB268E86Bec91a66fF0E163a0F21298D492594", // mainnet fee distribution
  ATTESTER: "0xF709728cedA1596aa3f6B78785e7D72E644e2866", // signs X / GitHub account proofs for the fee escrow (key on the server)
};

/** Tickers nobody can launch on the curve (case-insensitive). */
const RESERVED_TICKERS = ["AGNT", "BNB", "WBNB", "BTC", "BTCB", "ETH", "WETH", "USDT", "USDC", "FDUSD", "DAI", "CAKE"];

const DAY = 86400;

/** Presale model "250+": floor 1 BNB = 1,000,000 AGNT up to 250 BNB, pro rata above, soft cap 50. */
const PRESALE = {
  floorRate: "1000000",
  saleTokens: "250000000",
  softCap: "50",
  minBuy: "0.05",
  maxBuy: "5",
  bonusBps: 1000,
  bonusCap: "25000000",
  bonusHours: 48,
  days: 15,
};

/** $AGNT allocations (millions). */
const TOKENOMICS = {
  presale: 250, community: 200, liquidity: 150, listingReserve: 60, team: 120, ecosystem: 120, treasury: 100,
};

module.exports = {
  WALLETS,
  RESERVED_TICKERS,
  PRESALE,
  TOKENOMICS,
  networks: {
    // BNB Chain testnet: tuned so 10-15 people with faucet BNB can graduate a token
    97: {
      router: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
      agentRegistry: "testnet", // deploy TestnetAgentID, free claims
      graduationTarget: "1",
      graduationFeeBps: 300,
      launchFee: "0",
      metaUpdateFee: "0",
      walletCapBps: 700,
      minTarget: "0.1",
      minWalletCapBps: 50,
      maxWalletCapBps: 2000,
      creatorAllocBps: 300,
      creatorAllocUnlock: 5 * DAY,
      rateLimited: false,
      perkThreshold: "100000",
      suffix: "AAAA",
      launcher: WALLETS.LAUNCHER,
      keeper: WALLETS.LAUNCHER,
      owner: "deployer", // testnet contracts stay with the deployer for quick changes
      startPaused: false,
    },
    // BNB Chain mainnet: strict
    56: {
      router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
      agentRegistry: "0x60B9262456dE011F7d15a54CdD8c48bAaa8B022F", // Agent ID (.ai), soulbound NFT
      extraRegistries: [], // ERC-8004 identity registry and other ecosystems are added later behind the 48 h timelock
      graduationTarget: "16",
      graduationFeeBps: 300,
      launchFee: "0.005",
      metaUpdateFee: "0.01",
      walletCapBps: 100,
      minTarget: "2",
      minWalletCapBps: 50,
      maxWalletCapBps: 200,
      creatorAllocBps: 0,
      creatorAllocUnlock: 0,
      rateLimited: true,
      perkThreshold: "100000",
      suffix: "AAAA",
      launcher: null,
      keeper: WALLETS.KEEPER,
      owner: WALLETS.TREASURY,
      startPaused: true, // opens after the AGNT listing
    },
    // local hardhat chain (demo, e2e tests)
    31337: {
      router: null, // mocks are deployed by scripts/local-demo.js
      agentRegistry: "testnet",
      graduationTarget: "1",
      graduationFeeBps: 300,
      launchFee: "0",
      metaUpdateFee: "0",
      walletCapBps: 700,
      minTarget: "0.1",
      minWalletCapBps: 50,
      maxWalletCapBps: 2000,
      creatorAllocBps: 300,
      creatorAllocUnlock: 5 * DAY,
      rateLimited: false,
      perkThreshold: "100000",
      suffix: "AAAA",
      launcher: null,
      keeper: null,
      owner: "deployer",
      startPaused: false,
    },
  },
};
