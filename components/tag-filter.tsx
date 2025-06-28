'use client';

import { Button } from "./ui/button";

type Props = {
    tags: string[]
    activeTag: string | null
    onSelect: (tag: string | null) => void
}

export default function TagFilter({ tags, activeTag, onSelect }: Props) {
    return (
        <div className="flex gap-2 flex-wrap mb-6">
            <Button
                variant={activeTag === null ? 'default' : 'outline'}
                onClick={() => onSelect(null)}>
                All
            </Button>
            {tags.map((tag) => (
                <Button
                    key={tag}
                    variant={activeTag === tag ? 'default' : 'outline'}
                    onClick={() => onSelect(tag)}>#{tag}</Button>
            ))}
        </div>
    )
}