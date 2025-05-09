import { getDataSuffix, submitReferral } from '@divvi/referral-sdk'
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { divvi } from './constants/addresses'

// Step 1: Create a wallet client and get the account
export const walletClient = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const [account] = await walletClient.getAddresses()

// Step 2: Execute an existing transaction within your codebase with the referral data suffix

// consumer is your Divvi Identifier
// providers are the addresses of the Rewards Campaigns that you signed up for on the previous page
const dataSuffix = getDataSuffix({
  consumer: '0x123',
  providers: ['0x5f0a55FaD9424ac99429f635dfb9bF20c3360Ab8','0xB06a1b291863f923E7417E9F302e2a84018c33C5','0x6226ddE08402642964f9A6de844ea3116F0dFc7e'],
})
  
const txHash = await walletClient.sendTransaction({
  account,
  to: divvi,
  data: "0x" + dataSuffix as `0x${string}`,
  value: BigInt(0),
  // ... other transaction parameters
})

// Step 3: Get the chain ID of the chain that the transaction was sent to
const chainId = await walletClient.getChainId()

// Step 4: Report the transaction to the attribution tracking API
await submitReferral({
  txHash,
  chainId,
})
    