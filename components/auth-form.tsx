"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

export default function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email, password
        })

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Logged in successfully!")
            window.location.href = "/"
        }
        setLoading(false);
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
            <Button disabled={loading} type="submit">
                {loading ? 'Logging in...' : 'Login'}
            </Button>
        </form>
    )
}
