"use client"

import { Caravan, HandCoins } from "lucide-react";
import { Menu } from "../top/menu"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

import { useAccount } from 'wagmi'
import { useRouter } from "next/navigation";

export function Wrapper() {

    const { address, isConnected } = useAccount();
    console.log(address);

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
                    <div className="flex w-full justify-end">
                        <Button 
                            disabled={!isConnected}
                            className="max-w-fit h-12 rounded-xl"
                            onClick={() => router.push("/fleet/buy")}
                        >
                            <HandCoins />
                            <p>Buy 3-Wheeler</p>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-center">
                <div className="flex w-full max-w-[66rem] gap-4">

                </div>
            </div>
        </div>
    );
}