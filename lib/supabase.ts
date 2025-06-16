import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Article = {
  id: string
  title: string
  description: string
  content: string
  image_url: string
  publish_date: string
  category: string
  read_time: string
  author_name: string
  author_avatar: string
  author_role: string
  tags: string[]
  created_at: string
  updated_at: string
}
