'use client'

import { useThemeStore } from '@/store/theme-store'
import { Sun, Moon, Laptop } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Theme } from '@/src/types'

const options = [
    { label: 'Light', icon: Sun, value: 'light' },
    { label: 'Dark', icon: Moon, value: 'dark' },
    { label: 'System', icon: Laptop, value: 'system' },
]

export function ThemeToggle() {
    const { theme, setTheme } = useThemeStore()

    return (
        <div className="flex gap-2">
            {options.map(({ label, icon: Icon, value }) => (
                <Button
                    key={value}
                    variant={theme === value ? 'default' : 'outline'}
                    onClick={() => setTheme(value as Theme)}
                    size="icon"
                    title={label}
                >
                    <Icon className="h-4 w-4" />
                </Button>
            ))}
        </div>
    )
}
