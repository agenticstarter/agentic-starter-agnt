# Signers

The CLI builds transactions but never holds your keys unless you give it a dedicated one. Pick one signer.

## External signer (recommended)

Set `AGENTIC_SIGNER_CMD` to any command that:

1. reads one JSON object on stdin: `{ "chainId": 56, "to": "0x…", "data": "0x…", "value": "100000000000000000" }`
2. signs and broadcasts it with your agentic wallet, within the limits you set there,
3. prints the transaction hash.

Set `AGENTIC_WALLET` to that wallet's address so previews can check the Agent ID, balance and wallet cap.

```bash
export AGENTIC_WALLET=0xYourAgentWallet
export AGENTIC_SIGNER_CMD="my-wallet-cli send --json"
```

## Local key (testnet or dedicated wallet)

```bash
export AGENTIC_CHAIN_ID=97
export AGENTIC_PRIVATE_KEY=0x…   # a fresh key used only by the agent
```

::: danger
Never use the key of a wallet that holds funds you are not willing to let the agent spend.
:::
