"use client"

import '@rainbow-me/rainbowkit/styles.css';

import { WagmiProvider, createConfig, http } from 'wagmi';
import { celo } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';


export function Providers({ children }: { children: React.ReactNode }) {
    
    const connectors = connectorsForWallets(
        [
          {
            groupName: 'Recommended',
            wallets: [injectedWallet],
          },
        ],
        {
          appName: '3 Wheeler Bike Club',
          projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? '044601f65212332475a09bc14ceb3c34',
        }
      );

    const config = createConfig({
        connectors,
        chains: [celo],
        transports: {
          [celo.id]: http(),
        },
    });

    const queryClient = new QueryClient()

    return (
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
                {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      );
}   
