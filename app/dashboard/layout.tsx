import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen grid grid-cols-[200px_1fr]">
            <aside className="bg-muted p-4 space-y-2">
                <p className="font-bold">Dashboard</p>
                <ul className="space-y-1 text-sm">
                    <li><a href="/dashboard/profile">👤 Profile</a></li>
                    <li><a href="/dashboard/settings">⚙️ Settings</a></li>
                </ul>
            </aside>
            <main className="p-6">{children}</main>
        </div>
    )
}
