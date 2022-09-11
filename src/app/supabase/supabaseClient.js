import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bqtdfwhyyvbxhjsepylj.supabase.co";
// const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxdGRmd2h5eXZieGhqc2VweWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI2MTE0MjMsImV4cCI6MTk3ODE4NzQyM30.8UKdcXj58AVi0nXfQfliYwpiOzDaW49NODCmzWMJ_IE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
