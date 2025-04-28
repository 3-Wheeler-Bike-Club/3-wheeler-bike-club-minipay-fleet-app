"use client"


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button";
import { HistoryIcon } from "lucide-react";
import { useGetLogs } from "@/hooks/useGetLogs";
import { useAccount } from "wagmi";




export function History() {

   const { address } = useAccount();

   const { logs } = useGetLogs(address);
   console.log(logs)

    return (
        <>
        <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline" className="max-w-fit h-12 rounded-2xl">
                        <HistoryIcon className="text-yellow-600" />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                <div className="mx-auto w-full max-w-sm pb-6">
                    <DrawerHeader>
                        <DrawerTitle>
                            History
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className="flex flex-col w-full h-full items-center gap-8 p-24 max-md:p-6">
                        <p>History</p>
                    </div>
                </div>
                    
                </DrawerContent>
        </Drawer>
        </>
    );
}