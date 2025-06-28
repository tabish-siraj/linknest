import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeState } from "@/src/types";

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'system',
            setTheme: (theme) => {
                set({ theme })
                const root = window.document.documentElement;

                if (theme === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                    root.classList.toggle('dark', prefersDark)
                } else {
                    root.classList.toggle('dark', theme === 'dark')
                }
            }
        }),
        {
            name: "theme-preference"
        }
    )
)