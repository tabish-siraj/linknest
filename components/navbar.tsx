"use client"
import Link from 'next/link'
import { useAuth } from '@/components/auth-provider'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'

export default function Navbar() {
    const { session } = useAuth()
    const router = useRouter()

    const handleLogout = async () => {
        const { error } = await import('@/lib/supabase').then((({ supabase }) =>
            supabase.auth.signOut())
        )
        if (!error) router.replace('/')
    }
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b bg-background sticky top-0 z-50">
            <Link href="/" className="text-lg font-semibold tracking-tight">
                🔖 LinkNest
            </Link>

            <nav className="flex items-center gap-4 text-sm">
                <Link href="/profile">Profile</Link>
                <Link href="/settings">Settings</Link>

                {session && (
                    <Button variant="outline" size="sm" onClick={handleLogout}>
                        Logout
                    </Button>
                )}
                <ThemeToggle />
            </nav>
        </header>
    )
}