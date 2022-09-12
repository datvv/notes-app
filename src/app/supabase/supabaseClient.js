import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

// const supabaseAnonKey =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxdGRmd2h5eXZieGhqc2VweWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI2MTE0MjMsImV4cCI6MTk3ODE4NzQyM30.8UKdcXj58AVi0nXfQfliYwpiOzDaW49NODCmzWMJ_IE";

console.log("supabaseUrl2 :", supabaseUrl);
console.log("supabaseAnonKey :", supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
