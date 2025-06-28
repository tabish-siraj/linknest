import { useAuth } from "@/components/auth-provider"

export default function ProfilePage() {
    const { session } = useAuth()
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">👤 Profile: {session?.user.email}</h1>
            <p>This is your profile page. We&apos;ll add user data here soon.</p>
        </div>
    )
}