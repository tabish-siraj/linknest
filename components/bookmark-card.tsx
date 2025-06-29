import { Card, CardContent } from "./ui/card";
import { Bookmark } from "@/src/types";
interface BookmarkCardProps {
    bookmark: Bookmark
    onDelete: (id: number) => void
}

export default function BookmarkCard({ bookmark, onDelete }: BookmarkCardProps) {
    return (
        <Card className="w-full">
            <CardContent className="p-4 flex flex-row justify-between items-center">
                <div className="px-4">
                    <a href={bookmark.url} target="_blank" className="font-semibold text-blue-600">
                        {bookmark.title}
                    </a>
                    <p className="text-sm text-muted-foreground">{bookmark.url}</p>
                    {bookmark.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                            {bookmark.tags.map((tag: string, i: number) => (
                                <span key={i} className="text-xs bg-muted px-2 py-0.5 rounded">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <button onClick={() => onDelete(bookmark.id)}>Delete</button>
            </CardContent>
        </Card>
    )
}