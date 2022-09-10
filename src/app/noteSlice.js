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
    editable: false,
    activatedId: "",
  },
  reducers: {
    selectItem: (state, action) => {
      state.activatedId = action.payload;
      state.editable = true;
    },
    removeSelectedItem: (state, action) => {
      state.activatedId = "";
    },
    changeEditMode: (state, action) => {
      state.editable = action.payload;
      state.activatedId = "";
    },
  },
  extraReducers: {
    [fetchNotes.fulfilled]: (state, action) => {
      state.notes = [...action.payload];
    },
  },
});

const { actions, reducer } = noteSlice;
export const { selectItem, removeSelectedItem, changeEditMode } = actions;
export default reducer;
