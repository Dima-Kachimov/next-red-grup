import React from "react";
import type {PropsWithChildren} from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--var-mont'
})


export default function DashboardLayout({children}: PropsWithChildren<unknown>) {
    return (
        <div className={montserrat.className}>
            <h1>Dashboard</h1>
            {children}
        </div>
    );
}