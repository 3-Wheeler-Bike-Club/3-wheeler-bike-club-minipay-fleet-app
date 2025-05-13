import { divviProviderIntegrationRewards, divviProviderProofOfShip } from "@/utils/constants/addresses"
import { getDataSuffix, submitReferral } from "@divvi/referral-sdk"
import { createWalletClient, custom, encodeFunctionData, erc20Abi, maxUint256 } from "viem"
import { optimism } from "viem/chains"

export const useDivvi = () => {
  
    async function registerUser(account: `0x${string}`, to: `0x${string}`) {
      // Step 1: Create a wallet client and get the account
      const walletClient = createWalletClient({
        chain: optimism,
        transport: custom(window.ethereum),
      })

      const data = encodeFunctionData({
        abi: erc20Abi,
        functionName: "approve",
        args: [to, maxUint256]
      })
      
      // Step 2: Execute an existing transaction within your codebase with the referral data suffix

      // consumer is your Divvi Identifier
      // providers are the addresses of the Rewards Campaigns that you signed up for on the previous page
      const dataSuffix = getDataSuffix({
        consumer: "0x99342D3CE2d10C34b7d20D960EA75bd742aec468",
        providers: [divviProviderProofOfShip, divviProviderIntegrationRewards],
      })
      walletClient.switchChain(optimism)
      const txHash = await walletClient.sendTransaction({
        account,
        to: to,
        data: data + dataSuffix as `0x${string}`,
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