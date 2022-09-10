import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { insertNoteApi, fetchNotesApi } from "./api";

export const createNote = createAsyncThunk(
  "notes/createNote",
  async (params, thunkApi) => {
    await insertNoteApi(params);
    thunkApi.dispatch(fetchNotes());
  }
);

export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async (params, thunkApi) => {
    const notes = await fetchNotesApi();
    console.log("/fetchNote: ", notes);
    return notes;
  }
);

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
    editable: true,
    activatedId: "",
  },
  reducers: {
    selectItem: (state, action) => {
      state.activatedId = action.payload;
    },
    // addNote: (state, action) => {
    //   state.push(action.payload);
    // },
    // deleteNote: (state, action) => {
    //   state.splice(action.payload, 1);
    // },
  },
  extraReducers: {
    [fetchNotes.fulfilled]: (state, action) => {
      state.notes = [...action.payload];
    },
  },
});

const { actions, reducer } = noteSlice;
export const { selectItem, deleteNote } = actions;
export default reducer;
