import { create } from "zustand";
import { persist } from "zustand/middleware"
import { State } from "@/src/types";

// export const useBookmarkStore = create<State>((set) => ({
//     bookmarks: [],
//     activeTag: null,
//     addBookmark: (b) =>
//         set((state) => ({ bookmarks: [...state.bookmarks, b] })),
//     deleteBookmark: (id) =>
//         set((state) => ({ bookmarks: state.bookmarks.filter((b) => b.id !== id) })),
//     setActiveTag: (tag) => set({ activeTag: tag })
// }))

export const useBookmarkStore = create(persist<State>(
    (set) => ({
        bookmarks: [],
        activeTag: null,
        addBookmark: (b) =>
            set((state) => ({ bookmarks: [...state.bookmarks, b] })),
        deleteBookmark: (id) =>
            set((state) => ({ bookmarks: state.bookmarks.filter((b) => b.id !== id) })),
        setActiveTag: (tag) => set({ activeTag: tag })
    }),
    {
        name: "bookmarks-storage", // localStorage key
    }
))