import Image from "next/image";


export function Menu() {

    
    
    return (
        <div className="flex w-full justify-center">
            <div className="w-full max-w-[96rem] max-h-[4rem] h-full flex justify-between items-center px-6">
                <div className="flex">
                    <Image src="/icons/512x512.png" alt="logo" width={50} height={50} /> 
                </div>

                <div className="flex gap-1">    
                    <a href="https://x.com/3wbClub" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/x.svg" alt="x" width={30} height={30} />
                    </a>
                    <a href="https://t.me/threeWB" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/telegram.svg" alt="telegram" width={30} height={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}