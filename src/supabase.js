import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zijtjncqswokgyafiugx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppanRqbmNxc3dva2d5YWZpdWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4MTc4NjIsImV4cCI6MjAwNTM5Mzg2Mn0.q5j9qhQIxFRCX-SCuDpVN6pZ7_NDCqJda-6G6svD-Js";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
