'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BookForm({onAdd}: {onAdd:(b:any)=> void}){
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if (!title || !url) return;
        onAdd({id: Date.now(), title, url});
        setTitle('');
        setUrl('');
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
            <Input placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <Input placeholder="URL" value={url} onChange={(e)=>setUrl(e.target.value)}/>
            <Button type="submit">Add Bookmark</Button>
        </form>
    )
}