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
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "../../ui/table";
import { Log } from "./log";




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
                <div className="mx-auto w-full max-w-sm pb-6">
                    <DrawerHeader>
                        <DrawerTitle>
                            History
                        </DrawerTitle>
                        <DrawerDescription className="max-md:text-[0.9rem]">View your fleet order history.</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col gap-2 p-4 pb-0">
                    <Table>
                        <TableCaption>A list of your recent fleet orders.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Fleet</TableHead>
                                <TableHead>No.</TableHead>
                                <TableHead>Txn</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                logs?.map((log) => (
                                    <Log key={log.transactionHash} log={log} />
                                ))
                            }
                        </TableBody>
                    </Table>

                    </div>
                </div>
                    
                </DrawerContent>
        </Drawer>
        </>
    );
}