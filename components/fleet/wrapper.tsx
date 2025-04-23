"use client"

import { Caravan, HandCoins, OctagonMinus } from "lucide-react";
import { Menu } from "../top/menu"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

import { useAccount, useReadContract } from 'wagmi'
import { useRouter } from "next/navigation";
import { fleetOrderBook } from "@/utils/constants/addresses";
import { fleetOrderBookAbi } from "@/utils/abi";
import { History } from "./history";

export function Wrapper() {

    const { address, isConnected } = useAccount();
    console.log(address);

    // read balance of USDT
    const { data: fleetOwned } = useReadContract({
        address: fleetOrderBook,
        abi: fleetOrderBookAbi,
        functionName: "getFleetOwned",
        args: [ address! ],
    });
    
    const router = useRouter();
    
    return (
        <div className="flex flex-col h-full p-4 md:p-6 lg:p-8 w-full gap-6">
            <Menu/>

            <div className="flex w-full justify-center">
                <Alert className="w-full max-w-[66rem]">
                    <Caravan className="h-4 w-4" />
                    <AlertTitle className="font-bold">Fleet!</AlertTitle>
                    <AlertDescription className="text-xs italic">
                        Add fleet and view orders & hire purchase 3 Wheelers.
                    </AlertDescription>
                </Alert>
            </div>

            <div className="flex w-full items-center justify-center">
                <div className="flex w-full max-w-[66rem] gap-4">
                    <div className="flex w-full gap-2 justify-end">
                        <Button 
                            disabled={!isConnected}
                            className="max-w-fit h-12 rounded-xl"
                            onClick={() => router.push("/fleet/buy")}
                        >
                            <HandCoins />
                            <p>Buy 3-Wheeler</p>
                        </Button>
                        {
                            fleetOwned && fleetOwned.length >= 1 && (
                                <History/>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="flex w-full h-full justify-center">
                {
                    !fleetOwned && (
                        <div className="flex w-full max-w-[66rem] gap-4">
                            <div className="flex w-full justify-center">
                                <p>loading...</p>
                            </div>
                        </div>
                    )
                }
                {fleetOwned && fleetOwned.length < 1 && (
                    <div className="flex w-full h-full max-w-[66rem] gap-4">
                        <div className="flex flex-col w-full h-full items-center pt-36 max-md:pt-18 gap-4">
                            <OctagonMinus className="h-40 w-40 max-md:h-30 max-md:w-30 text-yellow-500" />
                            <p className="text-2xl max-md:text-xl text-center font-bold">Your fleet is empty.</p>
                            <p className="text-sm max-md:text-xs text-center text-muted-foreground">Get fractional or full ownership of a 3-wheeler to start earning.</p>
                        </div>
                    </div>
                    )
                }
                { fleetOwned && fleetOwned.length >= 1 && (
                    <div className="flex w-full max-w-[66rem] gap-4">
                        <p>You have {fleetOwned.length} fleet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}