import { z } from 'zod';

export const schema = z.object({
    title: z.string().min(1, "Title is required"),
    url: z.string().url("Enter a valid URL"),
    tags: z.string().optional(),
})

export type Schema = z.infer<typeof schema>;