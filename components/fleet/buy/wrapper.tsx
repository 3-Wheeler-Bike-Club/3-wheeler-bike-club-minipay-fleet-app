"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
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
import { ChartPie, CircleDivide, Ellipsis, Minus, Plus, RefreshCw } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";



export function Wrapper() {

    const [amount, setAmount] = useState(1)
    const [fractions, setFractions] = useState(1)
    const [loading, setLoading] = useState(false)
    const [isFractionsMode, setIsFractionsMode] = useState(true)

    const router = useRouter()
    const { isConnected } = useAccount()

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

    
    
    

    useEffect(() => {
        if (!isConnected) {
            router.replace("/")
        }
    }, [isConnected, router])

    return (
        <div className="flex flex-col w-full h-full items-center gap-8 p-24 max-md:p-6">

        <Drawer open={true}>
      
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
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
                                {isFractionsMode ? Math.ceil(fractions * ( 46 )) : Math.ceil(amount * (46 * 50))} <span className="text-muted-foreground">cUSD</span>
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
                            <Button className="w-full" disabled={!amount} /*onClick={purchaseWithPaystack}*/>
                            {
                                        loading
                                        ? (
                                            <>
                                                <motion.div
                                                initial={{ rotate: 0 }} // Initial rotation value (0 degrees)
                                                animate={{ rotate: 360 }} // Final rotation value (360 degrees)
                                                transition={{
                                                    duration: 1, // Animation duration in seconds
                                                    repeat: Infinity, // Infinity will make it rotate indefinitely
                                                    ease: "linear", // Animation easing function (linear makes it constant speed)
                                                }}
                                            >
                                                    <Ellipsis/>
                                                </motion.div>
                                            </>
                                        )
                                        : (
                                            <>
                                                Pay with MiniPay
                                            </>
                                        )
                            }
                            
                            </Button>
                            
                            <DrawerClose asChild>
                                <Button className="w-full" variant="outline" onClick={() => router.push("/fleet")}>Cancel</Button>
                            </DrawerClose>
                    </div>
                    <DrawerFooter>
                        <div className="flex flex-col gap-2 items-center justify-center pb-12">
                            <div className="flex items-center space-x-2">
                                <Label htmlFor="fractions-mode"><ChartPie /></Label>
                                <Switch checked={!isFractionsMode} onCheckedChange={() => {
                                    setIsFractionsMode(!isFractionsMode);
                                    setFractions(1);
                                    setAmount(1);
                                }} id="fractions-mode" />
                                <Label htmlFor="fractions-mode"><RefreshCw /></Label>
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