"use client"

import { useEffect } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";


export const MiniAppContext = ({ children }: { children: React.ReactNode }) => {

    const { connect } = useConnect();
      
    useEffect(() => {
        if (window.ethereum?.isMiniPay) {
            connect({ connector: injected() });
        }
    }, []);

    return (
        <>
            {children}
        </>
    )
};