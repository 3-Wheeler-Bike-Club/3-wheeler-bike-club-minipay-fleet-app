"use client"


import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../../ui/button";
import { HistoryIcon } from "lucide-react";
import { useGetLogs } from "@/hooks/useGetLogs";
import { useAccount } from "wagmi";




export function Logs() {
    
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
                <DrawerContent className="h-full">
                
                    
                </DrawerContent>
        </Drawer>
        </>
    );
}