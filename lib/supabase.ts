import { createBrowserClient } from '@supabase/ssr'

export const supabase = createBrowserClient(
    'https://ffsmzcqmoskohhzxqalj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmc216Y3Ftb3Nrb2hoenhxYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNDIwNjAsImV4cCI6MjA2NjcxODA2MH0.1b2lxEWKn0PUg-KHIEKT_XyQX_u5LCjjatdt7-SBbe4'
)