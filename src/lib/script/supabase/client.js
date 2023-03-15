import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL as project_url, PUBLIC_SUPABASE_ANON_KEY as anon_key } from '$env/static/public'

export const supabase = createClient(
  project_url || '',
  anon_key || ''
)