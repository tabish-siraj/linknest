export interface Bookmark {
    id: number;
    title: string;
    url: string;
    tags: string[];
}

export interface State {
    bookmarks: Bookmark[]
    activeTag: string | null
    addBookmark: (b: Bookmark) => void
    deleteBookmark: (id: number) => void
    setActiveTag: (tag: string | null) => void
}

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeState {
    theme: Theme
    setTheme: (theme: Theme) => void
}