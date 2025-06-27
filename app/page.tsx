"use client";
import { useEffect, useState } from "react";
import BookmarkForm from "@/components/bookmark-form";
import BookmarkCard from "@/components/bookmark-card";
import { Bookmark } from "../src/types";
import { loadBookmarks, saveBookmarks } from "@/lib/utils";

export default function Home() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const stored = loadBookmarks()
    setBookmarks(stored)
  }, [])

  useEffect(() => {
    saveBookmarks(bookmarks)

  }, [bookmarks])

  const addBookmark = (bookmark: Bookmark) => {
    setBookmarks(prev => [...prev, bookmark]);
  }

  const deleteBookmark = (id: number) => {
    setBookmarks(prev => prev.filter(b => b.id !== id))
  }
  return (
    <main className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">LinkNest</h1>
      <BookmarkForm onAdd={addBookmark} />
      <div className="mt-8 flex flex-col gap-4">
        {bookmarks.map((bookmark) => (
          <BookmarkCard key={bookmark.id} bookmark={bookmark} onDelete={deleteBookmark} />
        ))}
      </div>
    </main>
  );
}
