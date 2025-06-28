'use client';

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bookmark } from "@/src/types";
import { Schema, schema } from "@/src/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner";


export default function BookForm({ onAdd }: { onAdd: (b: Bookmark) => void }) {
    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: '',
            url: '',
            tags: ''
        }
    })

    const onSubmit = (values: Schema) => {
        const parsedTags = values.tags?.split(',').map((tag) => tag.trim()).filter(Boolean) || []
        onAdd({
            id: Date.now(),
            title: values.title,
            url: values.url,
            tags: parsedTags
        })
        toast.success("Bookmark added!", { description: "Saved to your list successfully!", duration: 4000 })
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-md">
                <FormField
                    control={form.control}
                    name="title"
                    render={
                        ({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    } />
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tags (comma-separated)</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. dev, design, react" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Add Bookmark</Button>
            </form>
        </Form>
    )
}