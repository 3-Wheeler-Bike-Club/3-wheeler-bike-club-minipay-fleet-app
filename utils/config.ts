import { injected } from "wagmi/connectors";
import { createConfig, http } from "wagmi";
import { celo } from "wagmi/chains";

export const config = createConfig({
    connectors: [injected()],
    chains: [celo],
    transports: {
      [celo.id]: http(process.env.ALCHEMY_RPC_URL),
    },
});