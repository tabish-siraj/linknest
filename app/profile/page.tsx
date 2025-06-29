'use client'

import { useAuth } from '@/components/auth-provider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import AppLayout from '@/components/app-layout'

export default function ProfilePage() {
    const { session, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !session) {
            router.replace('/login')
        }
    }, [loading, session, router])

    if (loading) return <p className="p-6">Loading...</p>
    if (!session) return null

    return (
        <AppLayout>
            <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>
            <p>Your email: {session.user.email}</p>
        </AppLayout>
    )
}
