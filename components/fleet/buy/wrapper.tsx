"use client"

import { useRouter } from "next/navigation";
import { useWriteContract } from "wagmi";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChartPie, Ellipsis, Minus, Plus, RefreshCw } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { USDT, USDT_ADAPTER, cUSD, fleetOrderBook } from "@/utils/constants/addresses";
import { fleetOrderBookAbi } from "@/utils/abi";
import { erc20Abi } from "viem";
import { parseUnits } from 'viem'
import { celo } from "viem/chains";
 




export function Wrapper() {

    const [amount, setAmount] = useState(1)
    const [fractions, setFractions] = useState(1)
    const [loadingUSDT, setLoadingUSDT] = useState(false)
    const [loadingCeloUSD, setLoadingCeloUSD] = useState(false)
    const [isFractionsMode, setIsFractionsMode] = useState(true)

    const router = useRouter()
    const { writeContract, writeContractAsync } = useWriteContract()

    const increase = () => setAmount((prev) => prev + 1);
    const decrease = () => setAmount((prev) => (prev > 1 ? prev - 1 : 1));

    const increaseFractions = () => {
        setFractions((prev) => {
            const newValue = prev + 1;
            if (newValue >= 50) {
                setIsFractionsMode(false);
                return 50;
            }
            return newValue;
        });
    };
    const decreaseFractions = () => setFractions((prev) => (prev > 1 ? prev - 1 : 1));

    
   



    async function orderFleetWithUSDT() {    
        try {
            setLoadingUSDT(true)
            await writeContractAsync({
                abi: erc20Abi,
                address: /*"0x74869c892C9f64AC650e3eC13F6d07C0f21007a6"*/USDT,
                chainId: celo.id,
                feeCurrency: USDT_ADAPTER,
                functionName: "approve",
                args: [fleetOrderBook, parseUnits(String(fractions *46), 18) ],
            },{
                onSuccess() {
                    writeContract({
                        abi: fleetOrderBookAbi,
                        address: fleetOrderBook,
                        chainId: celo.id,
                        feeCurrency: USDT_ADAPTER,
                        functionName: "orderMultipleFleet",
                        args: [BigInt(fractions), /*"0x74869c892C9f64AC650e3eC13F6d07C0f21007a6"*/USDT],
                    },{
                        onSuccess() {
                            setLoadingUSDT(false)
                        }
                    });
                },
            });
        } catch (error) {
            console.log(error)
            setLoadingUSDT(false)
        } 

        
    }
    async function orderFleetWithCeloUSD() {    
        try {
            setLoadingCeloUSD(true)
            await writeContractAsync({
                abi: erc20Abi,
                address: /*"0x74869c892C9f64AC650e3eC13F6d07C0f21007a6"*/cUSD,
                chainId: celo.id,
                feeCurrency: USDT_ADAPTER,
                functionName: "approve",
                args: [fleetOrderBook, parseUnits(String(fractions *46), 18) ],
            },{
                onSuccess() {
                    writeContract({
                        abi: fleetOrderBookAbi,
                        address: fleetOrderBook,
                        chainId: celo.id,
                        feeCurrency: USDT_ADAPTER,
                        functionName: "orderMultipleFleet",
                        args: [BigInt(fractions), /*"0x74869c892C9f64AC650e3eC13F6d07C0f21007a6"*/cUSD],
                    },{
                        onSuccess() {
                            setLoadingCeloUSD(false)
                        }
                    });
                },
            });
        } catch (error) {
            console.log(error)
            setLoadingCeloUSD(false)
        } 

        
    }


    async function orderFleetFractionsWithUSDT() {    
        try {
            setLoadingUSDT(true)
            await writeContractAsync({
                abi: erc20Abi,
                address: /*"0x74869c892C9f64AC650e3eC13F6d07C0f21007a6"*/USDT,
                chainId: celo.id,
                feeCurrency: USDT_ADAPTER,
                functionName: "approve",
                args: [fleetOrderBook, parseUnits(String(fractions *46), 18) ],
            },{
                onSuccess() {
                    writeContract({
                        abi: fleetOrderBookAbi,
                        address: fleetOrderBook,
                        chainId: celo.id,
                        feeCurrency: USDT_ADAPTER,
                        functionName: "orderFleet",
                        args: [BigInt(fractions), /*"0x74869c892C9f64AC650e3eC13F6d07C0f21007a6"*/USDT],
                    },{
                        onSuccess() {
                            setLoadingUSDT(false)
                        }
                    });
                },
            });
        } catch (error) {
            console.log(error)
            setLoadingUSDT(false)
        } 

        
    }
    async function orderFleetFractionsWithCeloUSD() {    
        try {
            setLoadingCeloUSD(true)
            await writeContractAsync({
                abi: erc20Abi,
                address: /*"0x74869c892C9f64AC650e3eC13F6d07C0f21007a6"*/cUSD,
                chainId: celo.id,
                feeCurrency: USDT_ADAPTER,
                functionName: "approve",
                args: [fleetOrderBook, parseUnits(String(fractions *46), 18) ],
            },{
                onSuccess() {
                    writeContract({
                        abi: fleetOrderBookAbi,
                        address: fleetOrderBook,
                        chainId: celo.id,
                        feeCurrency: USDT_ADAPTER,
                        functionName: "orderFleet",
                        args: [BigInt(fractions), /*"0x74869c892C9f64AC650e3eC13F6d07C0f21007a6"*/ cUSD],
                    },{
                        onSuccess() {
                            setLoadingCeloUSD(false)
                        }
                    });
                },
            });
        } catch (error) {
            console.log(error)
            setLoadingCeloUSD(false)
        } 

        
    }

    return (
        <div className="flex flex-col w-full h-full items-center gap-8 p-24 max-md:p-6">

        <Drawer open={true}>
      
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm pb-6">
                    <DrawerHeader>
                        <DrawerTitle>
                            {isFractionsMode ? "Purchase 3-Wheeler Fractions" : "Purchase a 3-Wheeler"}
                        </DrawerTitle>

                        

                        <DrawerDescription>Choose the amount of {isFractionsMode ? "fractions" : "3-Wheelers"} to purchase.</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col gap-8 p-4 pb-0">
                        
                        <div className="flex items-center justify-center space-x-2">
                            <div>
                                <Image src="/images/kekeHero.svg" alt="3-Wheeler" width={100} height={100} />
                            </div>
                            <div className="text-xl font-bold">
                                ~
                            </div>
                            <div className="text-xl font-bold">
                                {isFractionsMode ? Math.ceil(fractions * ( 46 )) : Math.ceil(amount * (46 * 50))} <span className="text-muted-foreground">USDT</span>
                            </div>
                        </div>  


                    <div>
                            <div className="flex items-center justify-between space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 shrink-0 rounded-full"
                                    onClick={isFractionsMode ? decreaseFractions : decrease}
                                    disabled={isFractionsMode ? fractions <= 1 : amount <= 1}

                                >
                                    <Minus />
                                    <span className="sr-only">Decrease</span>
                                </Button>
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="flex-1 text-center">
                                        
                                        <div className="text-7xl font-bold tracking-tighter">
                                        {isFractionsMode ? fractions : amount}
                                        </div>
                                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                                        No. of {isFractionsMode ? "Fractions" : "3-Wheelers"}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 shrink-0 rounded-full"
                                    onClick={isFractionsMode ? increaseFractions : increase}
                                    disabled={isFractionsMode ? fractions >= 50 : amount >= 24}
                                >
                                    <Plus />
                                    <span className="sr-only">Increase</span>

                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 py-14 px-4 pb-6">
                            <div className="flex gap-2 w-full">
                                {/**pay with USDT */}
                                <Button 
                                    className="w-1/2" 
                                    disabled={loadingCeloUSD || loadingUSDT} 
                                    onClick={() => {
                                        if (isFractionsMode) {
                                            orderFleetFractionsWithUSDT()
                                        } else {
                                            orderFleetWithUSDT()
                                        }
                                    }}
                                >
                                    {
                                        loadingUSDT
                                        ? (
                                            <>
                                                <motion.div
                                                    initial={{ rotate: 0 }}
                                                    animate={{ rotate: 360 }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                    }}
                                                >
                                                    <Ellipsis/>
                                                </motion.div>
                                            </>
                                        )
                                        : (
                                            <>
                                                Pay with USDT
                                            </>
                                        )
                                    }
                                </Button>
                                {/**pay with celoUSD */}
                                <Button 
                                    className="w-1/2" 
                                    disabled={loadingCeloUSD || loadingUSDT} 
                                    onClick={() => {
                                        if (isFractionsMode) {
                                            orderFleetFractionsWithCeloUSD()
                                        } else {
                                            orderFleetWithCeloUSD()
                                        }
                                    }}
                                >
                                    {
                                        loadingCeloUSD
                                        ? (
                                            <>
                                                <motion.div
                                                    initial={{ rotate: 0 }}
                                                    animate={{ rotate: 360 }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                    }}
                                                >
                                                    <Ellipsis/>
                                                </motion.div>
                                            </>
                                        )
                                        : (
                                            <>
                                                Pay with cUSD
                                            </>
                                        )
                                    }
                                </Button>
                            </div>
                            <DrawerClose asChild>
                                <Button className="w-full" variant="outline" onClick={() => router.push("/fleet")}>Cancel</Button>
                            </DrawerClose>
                    </div>
                    <DrawerFooter>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <div className="flex items-center space-x-2">
                                <Label htmlFor="fractions-mode">
                                    {isFractionsMode ? <ChartPie className="h-7 w-7 text-yellow-600"/> : <ChartPie className="h-6 w-6 text-muted-foreground"/>}
                                </Label>
                                <Switch checked={!isFractionsMode} onCheckedChange={() => {
                                    setIsFractionsMode(!isFractionsMode);
                                    setFractions(1);
                                    setAmount(1);
                                }} id="fractions-mode" />
                                <Label htmlFor="single-mode">
                                    {isFractionsMode ? <RefreshCw className="h-6 w-6 text-muted-foreground"/> : <RefreshCw className="h-7 w-7 text-yellow-600"/>}
                                </Label>
                            </div>
                            <div className="text-xs text-muted-foreground">
                                <p>Toggle between buying fractions or a single 3-Wheeler</p>
                            </div>
                        </div>
                    </DrawerFooter>
                </div>

            </DrawerContent>
        </Drawer>
        
        </div>
    );
}