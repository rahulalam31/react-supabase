import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://tulgpnqafyrqlodcwtkp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1bGdwbnFhZnlycWxvZGN3dGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5NjgyNjAsImV4cCI6MjAxMTU0NDI2MH0.cHnUty1tqkF2_4AxvKIRngK_CrLVU9kuo92jizovrUI")