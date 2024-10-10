import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hjvxplpovfazqqegginc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqdnhwbHBvdmZhenFxZWdnaW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwMDUzOTQsImV4cCI6MjAzOTU4MTM5NH0.cJCtDwJKLqQrpsDpBEk09YvRKBq4xJ1Dn398dZbHYMY'
export const supabase = createClient(supabaseUrl, supabaseKey)