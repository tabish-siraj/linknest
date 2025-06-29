"use client";

import BookmarkForm from "@/components/bookmark-form";
import BookmarkCard from "@/components/bookmark-card";
import TagFilter from "@/components/tag-filter";
import { useEffect, useState } from "react";
import { useBookmarks } from "@/lib/useBookmarks";
import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import AppLayout from "@/components/app-layout";

export default function Home() {
  const { session, loading: sessionLoading } = useAuth()
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const { bookmarks, addBookmark, deleteBookmark } = useBookmarks()

  const router = useRouter()
  useEffect(() => {
    if (!sessionLoading && !session) {
      router.replace('/')
    }
  }, [sessionLoading, session, router])
  if (sessionLoading) return <p className="p-6">Loading...</p>
  if (!session) return null


  const filtered = activeTag
    ? bookmarks.filter((b) => b.tags?.includes(activeTag))
    : bookmarks;

  const allTags = Array.from(new Set(bookmarks.flatMap((b) => b.tags || [])))

  return (
    <AppLayout>
      <BookmarkForm onAdd={addBookmark} />

      <div className="mt-8">
        <TagFilter tags={allTags} activeTag={activeTag} onSelect={setActiveTag} />

        <div className="flex flex-col gap-4">
          {filtered.map(b => (
            <BookmarkCard key={b.id} bookmark={b} onDelete={() => deleteBookmark(b.id)} />
          ))}
        </div>
      </div>
    </AppLayout>

  );
}
