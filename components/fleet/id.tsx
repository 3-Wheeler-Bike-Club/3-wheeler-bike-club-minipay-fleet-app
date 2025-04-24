
import { CarouselItem } from "../ui/carousel"
import { CardContent } from "../ui/card"
import { Card } from "../ui/card"
import Image from "next/image"



interface IdProps {
    fleet: BigInt
}

export function Id( {fleet}: IdProps ) {

    
    return (
        <>
            <CarouselItem key={Number(fleet)}>
                <div className="p-1 gap-2 flex flex-col">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image src="/images/kekeHero.svg" alt={""} width={300} height={300} />
                    </CardContent>
                </Card>
                <div className="flex flex-col gap-1 mt-2 text-sm">
                    <div className="flex justify-between items-center">
                    <span className="font-semibold">Vin:</span>
                    <span className="text-right"></span>
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="font-semibold">License Plate:</span>
                    <span className="text-right"></span>
                    </div>
                </div>
                </div>
            </CarouselItem>
        </>
    )
}
