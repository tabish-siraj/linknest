'use client'

import React, { createContext, useContext, useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { AuthContextType } from "@/src/types"
import { Session } from "@supabase/supabase-js"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getSession = async () => {
            const { data } = await supabase.auth.getSession()
            setSession(data.session)
            setLoading(false)
        }
        getSession()

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, newSession) => {
            setSession(newSession)
        })

        return () => subscription.unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ session, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error("useAuth must be used within <AuthProvider>")
    return ctx
}