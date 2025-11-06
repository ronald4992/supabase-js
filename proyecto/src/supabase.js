import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://nnwwkiehtvbmwckrovip.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ud3draWVodHZibXdja3JvdmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDUyODAsImV4cCI6MjA3ODAyMTI4MH0.pCJgK1bw8hZ2PwmkTtu4Zt8xXIqqlVmuYitGfElHNJQ';
export const supabase = createClient(supabaseUrl, supabaseKey);