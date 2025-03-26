
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://civcpbonzseguwdfdsiz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpdmNwYm9uenNlZ3V3ZGZkc2l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNDgxMjEsImV4cCI6MjA1MTgyNDEyMX0.z0-J1ozdFN47SKRI9XroxAS90nZ0EnX3chkN5XS0Miw"

export const supabase = createClient(supabaseUrl, supabaseKey)