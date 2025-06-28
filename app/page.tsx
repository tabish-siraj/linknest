"use client";

import BookmarkForm from "@/components/bookmark-form";
import BookmarkCard from "@/components/bookmark-card";
import TagFilter from "@/components/tag-filter";
import { useBookmarkStore } from "@/store/bookmark-store";
import Link from "next/link";

export default function Home() {
  const { bookmarks, activeTag, addBookmark, deleteBookmark, setActiveTag } = useBookmarkStore();
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
      </nav>
      <BookmarkForm onAdd={addBookmark} />

      <div className="w-full max-w-md mt-8">
        <TagFilter
          tags={allTags}
          activeTag={activeTag}
          onSelect={setActiveTag}
        />

        <div className="flex flex-col gap-4">
          {filtered.map((b) => (
            <BookmarkCard
              key={b.id}
              bookmark={b}
              onDelete={deleteBookmark} />
          ))}
        </div>
      </div>
    </main>
  );
}
