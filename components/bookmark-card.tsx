import { Card, CardContent } from "./ui/card";

export default function BookmarkCard({bookmark, onDelete}: any){
    return(
        <Card className="w-full max-w-md">
            <CardContent className="p-4 flex flex-row justify-between items-center">
                <div className="px-4">
                    <a href={bookmark.url} target="_blank" className="font-semibold text-blue-600">
                        {bookmark.title}
                    </a>
                    <p className="text-sm text-muted-foreground">{bookmark.url}</p>
                </div>
                <button onClick={() => onDelete(bookmark.id)}>Delete</button>
            </CardContent>
        </Card>
    )
}