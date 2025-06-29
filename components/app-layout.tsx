import React from "react";
import Navbar from "./navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center mx-auto">{children}</main>
        </div>
    )
}
