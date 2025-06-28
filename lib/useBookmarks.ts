'use client'

import { supabase } from "./supabase"
import { useEffect, useState } from "react"
import { Bookmark } from "@/src/types"

export function useBookmarks() {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
    const [loading, setLoading] = useState(true)

    const fetchBookmarks = async () => {
        const { data, error } = await supabase
            .from('bookmarks')
            .select('*')
            .order('created_at', { ascending: false })

        if (data && !error) {
            setBookmarks(data)
        }
        setLoading(false)
    }

    const addBookmark = async (bookmark: Omit<Bookmark, 'id'>) => {
        const user = (await supabase.auth.getUser()).data.user
        if (!user) return

        const { error } = await supabase
            .from('bookmarks')
            .insert([{ ...bookmark, user_id: user.id }])

        if (!error) fetchBookmarks()
    }

    const deleteBookmark = async (id: number) => {
        await supabase.from('bookmarks').delete().eq('id', id)
        fetchBookmarks()
    }

    useEffect(() => {
        fetchBookmarks()
    }, [])

    return {
        bookmarks,
        addBookmark,
        deleteBookmark,
        loading,
    }
}
