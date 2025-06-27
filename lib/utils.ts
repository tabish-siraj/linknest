import { Bookmark } from "@/src/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const loadBookmarks = () => {
  if (typeof window == "undefined") return [];
  try {
    const stored = localStorage.getItem('bookmarks')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error("Failed to load bookmark:", error)
    return []
  }
}

export const saveBookmarks = (bookmarks: Bookmark[]) => {
  try {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  } catch (error) {
    console.error("Failed to save bookmarks:", error)
  }
}