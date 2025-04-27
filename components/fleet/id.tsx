
import { CarouselItem } from "../ui/carousel"
import { CardContent } from "../ui/card"
import { Card } from "../ui/card"
import Image from "next/image"
import { useReadContract } from "wagmi"
import { fleetOrderBookAbi } from "@/utils/abi"
import { fleetOrderBook } from "@/utils/constants/addresses"



interface IdProps {
    fleet: BigInt
}

export function Id( {fleet}: IdProps ) {

    const { data: isfleetFractioned } = useReadContract({
        address: fleetOrderBook,
        abi: fleetOrderBookAbi,
        functionName: "fleetFractioned",
        args: [BigInt(Number(fleet))],
    })


    const { data: totalFractions } = useReadContract({
        address: fleetOrderBook,
        abi: fleetOrderBookAbi,
        functionName: "totalFractions",
        args: [BigInt(Number(fleet))],
    })


    const { data: fleetOrderStatus } = useReadContract({
        address: fleetOrderBook,
        abi: fleetOrderBookAbi,
        functionName: "getFleetOrderStatus",
        args: [BigInt(Number(fleet))],
    })

    
    return (
        <>
            <CarouselItem key={Number(fleet)}>
                <div className="p-1">
                    <Card className="bg-[url('/images/dodo.svg')] bg-center bg-cover">
                        <CardContent className="flex items-center justify-center p-6">
                        <Image src="/images/kekeHero.svg" alt={""} width={500} height={500} />
                        </CardContent>
                    </Card>
                    <div className="flex flex-col gap-1 mt-2 text-base">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Fleet ID:</span>
                            <span className="text-right">{Number(fleet)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Fleet Status:</span>
                            <span className="text-right">{fleetOrderStatus}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Ownership:</span>
                            <span className="text-right">{isfleetFractioned ? "Fractioned" : "Full"}</span>
                        </div>
                        {
                            isfleetFractioned && (
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Shares:</span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-right font-semibold">{totalFractions}</span>
                                        <span className="text-muted-foreground"> / </span>
                                        <span className="text-muted-foreground italic">50</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </CarouselItem>
        </>
    )
}
