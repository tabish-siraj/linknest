"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

export default function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mode, setMode] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true);

        const action = mode === 'login'
            ? supabase.auth.signInWithPassword({ email, password })
            : supabase.auth.signUp({ email, password })

        const { error } = await action;

        if (error) toast.error(error.message)
        else toast.success(`${mode === 'login' ? 'Logged in' : 'Signed up'} successfully!`)

        setLoading(false);
        if (mode === 'login') window.location.href = '/'
    }

    return (
        <form onSubmit={handleSignIn} className="max-w-sm space-y-3">
            <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <Button type="submit" disabled={loading}>
                {loading ? 'Loading...' : mode === 'login' ? 'Login' : 'Sign Up'}
            </Button>
            <p className="text-sm text-muted-foreground">
                {mode === 'login' ? (
                    <>
                        Don’t have an account?{' '}
                        <button type="button" onClick={() => setMode('signup')} className="underline text-blue-600">Sign Up</button>
                    </>
                ) : (
                    <>
                        Already have an account?{' '}
                        <button type="button" onClick={() => setMode('login')} className="underline text-blue-600">Log In</button>
                    </>
                )}
            </p>
        </form>
    )
}
