"use client"

import { ArrowRightFromLine, Caravan, HandCoins } from "lucide-react";
import { Menu } from "../top/menu"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export function Wrapper() {
    
    return (
        <div className="flex flex-col h-full p-4 md:p-6 lg:p-8 w-full gap-6">
            <Menu/>

            <div className="flex w-full justify-center">
                <Alert className="w-full max-w-[66rem]">
                    <Caravan className="h-4 w-4" />
                    <AlertTitle className="font-bold">Fleet!</AlertTitle>
                    <AlertDescription className="text-xs italic">
                        Add fleet and view orders & hire purchase 3 Wheelers.
                    </AlertDescription>
                </Alert>
            </div>

            <div className="flex w-full items-center justify-center">
                    <div className="flex w-full max-w-[66rem] gap-4">
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <HandCoins className="h-6 w-6" />
                                        <p className="text-lg">Buy a 3-Wheeler</p>
                                    </div>
                                    <div>
                                        <Button 
                                            className=""
                                            //onClick={() => router.push("/fleet/buy")}
                                        >
                                            <p>Get Brand New </p>
                                            <ArrowRightFromLine />
                                        </Button>
                                    </div>
                                </CardTitle>
                            </CardHeader>

                            

                        </Card>
                    </div>
                    
                </div>
        </div>
    );
}