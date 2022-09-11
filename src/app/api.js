import { supabase } from "./supabase/supabaseClient";

export async function fetchNotesApi() {
  try {
    let { data } = await supabase
      .from("notes")
      .select("id,title,content, created_at, updated_at");
    return data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
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

export async function deleteNoteApi(noteId) {
  try {
    await supabase.from("notes").delete().eq("id", noteId);
  } catch (error) {
    console.log(error);
  }
}

export async function updateNoteApi(noteItem) {
  try {
    const { data, error } = await supabase
      .from("notes")
      .update(noteItem)
      .eq("id", noteItem.id);
  } catch (error) {
    console.log(error);
  }
}

export async function upsertNoteApi(noteItem) {
  try {
    const { data, error } = await supabase
      .from("notes")
      .insert([noteItem], { upsert: true });
  } catch (error) {
    console.log(error);
  }
}
