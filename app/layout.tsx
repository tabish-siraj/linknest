'use client';

import "./globals.css";

import { Toaster } from "sonner";
import { useEffect } from "react";
import { useThemeStore } from "@/store/theme-store";
import { ThemeToggle } from "@/components/theme-toggle";

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    setTheme(theme)
  }, [theme, setTheme])
  return (
    <html lang="en">
      <body>
        <div dir="rtl">
          <div className="relative size-32">
            <div className="absolute start-0 top-0 size-14 p-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
        {children}
        <Toaster position="top-right" richColors closeButton /> {/* 🟡 Place this here */}
      </body>
    </html>
  );
}
