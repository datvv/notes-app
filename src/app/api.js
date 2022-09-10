import { supabase } from "../supabase/supabaseClient";

export async function fetchNotesApi() {
  try {
    let { data } = await supabase
      .from("notes")
      .select("id,title,content, created_at");
    return data;
  } catch (error) {
    console.log(error.message);
    return {};
  }
}

export async function insertNoteApi(noteItem) {
  try {
    await supabase.from("notes").insert([noteItem]);
  } catch (error) {
    console.log(error);
  }
}
