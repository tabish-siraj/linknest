"use client";

import { supabase } from "@/lib/supabase";
import BookmarkForm from "@/components/bookmark-form";
import BookmarkCard from "@/components/bookmark-card";
import TagFilter from "@/components/tag-filter";
// import { useBookmarkStore } from "@/store/bookmark-store";
import Link from "next/link";
import { useState } from "react";
import { useBookmarks } from "@/lib/useBookmarks";

export default function Home() {
  // const { bookmarks, activeTag, addBookmark, deleteBookmark, setActiveTag } = useBookmarkStore();
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const { bookmarks, addBookmark, deleteBookmark, loading } = useBookmarks()
  const filtered = activeTag
    ? bookmarks.filter((b) => b.tags?.includes(activeTag))
    : bookmarks;

  const allTags = Array.from(new Set(bookmarks.flatMap((b) => b.tags || [])))

  return (
    <main className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">🏠 LinkNest</h1>
      <nav className="flex gap-4">
        <Link href="/profile" className="underline text-blue-600 hover:text-blue-800">Profile</Link>
        <Link href="/settings" className="underline text-blue-600 hover:text-blue-800">Settings</Link>
        <button
          onClick={async () => {
            await supabase.auth.signOut()
            window.location.href = '/login'
          }}
          className="text-sm underline text-red-500"
        >
          Logout
        </button>
      </nav>
      <BookmarkForm onAdd={addBookmark} />

      <div className="w-full max-w-md mt-8">
        <TagFilter
          tags={allTags}
          activeTag={activeTag}
          onSelect={setActiveTag}
        />

        <div className="flex flex-col gap-4 mt-4">
          {loading ? <p>Loading bookmarks...</p> : (
            filtered.map((b) => (
              <BookmarkCard
                key={b.id}
                bookmark={b}
                onDelete={() => deleteBookmark(b.id)}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
