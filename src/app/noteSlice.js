import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  insertNoteApi,
  fetchNotesApi,
  deleteNoteApi,
  updateNoteApi,
} from "./api";

export const createNote = createAsyncThunk(
  "notes/createNote",
  async (params, thunkApi) => {
    await insertNoteApi(params);
    thunkApi.dispatch(fetchNotes());
  }
);

export const updateNote = createAsyncThunk(
  "notes/updateNote",
  async (params, thunkApi) => {
    await updateNoteApi(params);
    thunkApi.dispatch(fetchNotes());
  }
);

export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async (params, thunkApi) => {
    return await fetchNotesApi();
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (params, thunkApi) => {
    await deleteNoteApi(params);
    thunkApi.dispatch(removeSelectedItem());
    thunkApi.dispatch(fetchNotes());
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
    removeSelectedItem: (state, action) => {
      state.activatedId = "";
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
export const { selectItem, removeSelectedItem } = actions;
export default reducer;
