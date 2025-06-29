'use client';

import "./globals.css";

import { Toaster } from "sonner";
import { useEffect } from "react";
import { useThemeStore } from "@/store/theme-store";
import { AuthProvider } from "@/components/auth-provider";

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
        <AuthProvider>
          {children}
          <Toaster position="top-right" richColors closeButton /> {/* 🟡 Place this here */}
        </AuthProvider>
      </body>
    </html>
  );
}
