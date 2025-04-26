
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
                <div className="p-1">
                <Card>
                    <CardContent className="flex items-center justify-center p-6">
                    <Image src="/images/kekeHero.svg" alt={""} width={600} height={600} />
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
