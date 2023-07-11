
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://jbrwvjxstaddrcgdmgiq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impicnd2anhzdGFkZHJjZ2RtZ2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMzg4MDgsImV4cCI6MjAwMzYxNDgwOH0.d0UKz6vDqi1gQfb4aeB0S0lF2J4UB3V8JhyuvTpum50')