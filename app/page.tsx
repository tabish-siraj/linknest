"use client";
import { useState } from "react";
import BookmarkForm from "@/components/bookmark-form";
import BookmarkCard from "@/components/bookmark-card";

interface Bookmark {
  id: number;
  title: string;
  url: string;
}

export default function Home() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const addBookmark = (bookmark: Bookmark) => {
    setBookmarks([...bookmarks, bookmark]);
  }

  const deleteBookmark = (id: number) => {
    setBookmarks(bookmarks.filter(b => b.id !==id));
  }
  return (
    <main className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">LinkNest</h1>
      <BookmarkForm onAdd={addBookmark}/>
      <div className="mt-8 flex flex-col gap-4">
        {bookmarks.map((bookmark)=>(
          <BookmarkCard key={bookmark.id} bookmark={bookmark} onDelete={deleteBookmark}/>
        ))}
      </div>
    </main>
  );
}
