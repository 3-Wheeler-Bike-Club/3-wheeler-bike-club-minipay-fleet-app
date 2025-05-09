import { divvi } from "@/utils/constants/addresses"
import { getDataSuffix, submitReferral } from "@divvi/referral-sdk"
import { createWalletClient, custom } from "viem"
import { optimism } from "viem/chains"

export const useDivvi = (account: `0x${string}`) => {
  
    async function registerUser() {
      // Step 1: Create a wallet client and get the account
      const walletClient = createWalletClient({
        chain: optimism,
        transport: custom(window.ethereum),
      })

      // Step 2: Execute an existing transaction within your codebase with the referral data suffix

      // consumer is your Divvi Identifier
      // providers are the addresses of the Rewards Campaigns that you signed up for on the previous page
      const dataSuffix = getDataSuffix({
        consumer: "0x99342D3CE2d10C34b7d20D960EA75bd742aec468",
        providers: ["0x5f0a55FaD9424ac99429f635dfb9bF20c3360Ab8","0xB06a1b291863f923E7417E9F302e2a84018c33C5","0x6226ddE08402642964f9A6de844ea3116F0dFc7e"],
      })
      
      const txHash = await walletClient.sendTransaction({
        account,
        to: divvi,
        data: "0x" + dataSuffix as `0x${string}`,
        value: BigInt(0),
        // ... other transaction parameters
      })

      // Step 3: Get the chain ID of the chain that the transaction was sent to
      //const chainId = await walletClient.getChainId()

      // Step 4: Report the transaction to the attribution tracking API
      submitReferral({
        txHash,
        chainId: optimism.id,
      })          
    }
    return { registerUser }
  
}