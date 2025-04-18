import { injected } from "wagmi/connectors";
import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { celo } from "wagmi/chains";

export const config = createConfig({
    connectors: [injected()],
    chains: [celo],
    ssr: true,
    transports: {
      [celo.id]: http(process.env.ALCHEMY_RPC_URL),
    },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}