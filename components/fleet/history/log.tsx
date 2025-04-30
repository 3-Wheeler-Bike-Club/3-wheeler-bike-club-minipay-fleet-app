import { TableCell, TableRow } from "@/components/ui/table";
import { useGetBlockTime } from "@/hooks/useGetBlockTime";
import { shortenTxt } from "@/utils/shorten";
import { ChartPie, RefreshCw } from "lucide-react";

interface LogProps{
    log: any
}


export function Log({ log }: LogProps) {

    
   const { blockTime } = useGetBlockTime(log.blockNumber);


    return (
        <>
            <TableRow>
                <TableCell>{log.args.fleetId}</TableCell>
                <TableCell>{log.eventName === "FleetOrdered" ? <div className="flex items-center gap-2"><RefreshCw className="h-4 w-4 text-yellow-600"/> <p>1</p></div> : <div className="flex items-center gap-2"><ChartPie className="h-4 w-4 text-yellow-600"/> <p className="text-xs">{log.args.fractions} / 50</p></div>}</TableCell>
                <TableCell>{shortenTxt(log.transactionHash)}</TableCell>
                <TableCell>{new Date(Number(blockTime) * 1000).toLocaleDateString()}</TableCell>
            </TableRow>
        </>
    )
}
