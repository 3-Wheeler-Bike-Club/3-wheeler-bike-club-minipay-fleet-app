import { fleetOrderBookAbi } from '@/utils/abi';
import { publicClient } from '../utils/client'
import { useEffect, useState } from "react";
import { fleetOrderBook } from '@/utils/constants/addresses';
import { Log } from 'viem';



export const useGetLogs = (address: `0x${string}` | undefined) => {
  const [logs, setLogs] = useState<Log[] | undefined>(undefined);

    useEffect(() => {
        async function fetchFractionsLogs() {
            if (address) {
                const eventLogs = await publicClient.getLogs({
                    address: fleetOrderBook,
                    event: fleetOrderBookAbi[30],
                    args: {
                        buyer: address,
                    },
                    fromBlock: BigInt(33839270), 
                    toBlock: 'latest'
                })
                
            }
            
        }
        async function fetchFullLogs() {
            if (address) {
                const eventLogs = await publicClient.getLogs({
                    address: fleetOrderBook,
                    event: fleetOrderBookAbi[33],
                    args: {
                        buyer: address,
                    },
                    fromBlock: BigInt(33839270), 
                    toBlock: 'latest'
                })
            }
        }
    }, [address]);

    return { logs };
};