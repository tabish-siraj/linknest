import { useAuth } from '@/components/auth-provider'

export default function Navbar() {
    const { session } = useAuth()

    return (
        <nav className="p-4 bg-muted flex justify-between">
            <span>🔖 LinkNest</span>
            {session ? <span>{session.user.email}</span> : null}
        </nav>
    )
}