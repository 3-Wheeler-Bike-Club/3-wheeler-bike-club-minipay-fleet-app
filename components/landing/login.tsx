"use client";

import { useRouter } from "next/navigation";
import { usePrivy, User } from "@privy-io/react-auth";
import { useLogin } from "@privy-io/react-auth";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { LogIn, Bike, Users, Wallet } from "lucide-react";
import Image from "next/image";

export function Login() {
    //const router = useRouter()
    
    const { ready, authenticated } = usePrivy()

    const { login } = useLogin()
    /*
    const [logging, setLogging] = useState<boolean>(false);
    const [wasAuthenticated, setWasAuthenticated] = useState<User | null>(null);
    */
    /*
    useEffect(() => {
        if (logging && wasAuthenticated) {
            setLogging(false)
            //check if user has a profile 
            if (user?.customMetadata) {
                router.replace("/dashboard");
            } else {
                router.replace("/profile");
            }
            
        }
    }, [wasAuthenticated, logging, router, user?.customMetadata]);
    */

    const Login = async () => {
        try {
            //setLogging(true)

            if (!authenticated) {
                login()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-between min-h-screen p-8 space-y-12">
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
                <div className="relative w-48 h-48 mb-12">
                    <Image
                        src="/icons/logo.jpg"
                        alt="3WB Club Logo"
                        width={192}
                        height={192}
                        className="rounded-3xl"
                    />
                </div>
                
                <h1 className="text-6xl font-bold mb-6 text-center">Welcome to 3WB Members Club</h1>
                <p className="text-2xl mb-16 text-center max-w-3xl">
                    {"Join Africa's Premier Three-Wheeler Bike Community"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-16">
                    <div className="flex flex-col items-center p-8 rounded-2xl border">
                        <Bike className="w-16 h-16 mb-6" />
                        <h3 className="text-lg text-center font-semibold mb-4">Exclusive Events</h3>
                        <p className="text-center text-sm">Join our signature rides and community meetups across Africa</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-8 rounded-2xl border">
                        <Users className="w-16 h-16 mb-6" />
                        <h3 className="text-lg text-center font-semibold mb-4">Growing Community</h3>
                        <p className="text-center text-sm">Network with passionate three-wheeler enthusiasts</p>
                    </div>

                    <div className="flex flex-col items-center p-8 rounded-2xl border">
                        <Wallet className="w-16 h-16 mb-6" />
                        <h3 className="text-lg text-center font-semibold mb-4">Member Perks</h3>
                        <p className="text-center text-sm">Access exclusive discounts and special benefits</p>
                    </div>
                </div>

                <Button 
                    disabled={!ready} 
                    onClick={Login} 
                    className="w-64 h-16 text-base font-semibold rounded-3xl"
                >
                    <div className="flex w-full items-center justify-center gap-6 px-4">
                        <p>GET STARTED</p>
                        <LogIn className="w-6 h-6"/>
                    </div>
                </Button>
            </div>

            <footer className="w-full text-center py-4 text-sm">
                © 2024 3WB Labs Inc. All rights reserved.
            </footer>
        </div>
    );
}