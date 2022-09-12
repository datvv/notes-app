import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  insertNoteApi,
  fetchNotesApi,
  deleteNoteApi,
  updateNoteApi,
} from "./api";
import { appMode } from "./constants";

export const createNote = createAsyncThunk(
  "notes/createNote",
  async (params) => {
    await insertNoteApi(params);
  }
);

export const updateNote = createAsyncThunk(
  "notes/updateNote",
  async (params) => {
    delete params[("created_at", "updated_at", "index")];
    await updateNoteApi(params);
  }
);

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  return await fetchNotesApi();
});

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (params, thunkApi) => {
    await deleteNoteApi(params);
    thunkApi.dispatch(removeSelectedItem());
    thunkApi.dispatch(fetchNotes());
  }
);

export const upsertNote = createAsyncThunk(
  "notes/upsertNote",
  async (params) => {
    delete params[("created_at", "updated_at", "index")];
    await updateNoteApi(params);
  }
);

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
    appMode: appMode.edit,
    currentNote: null,
    currentIndex: null,
  },
  reducers: {
    selectItem: (state, action) => {
      state.currentNote = action.payload;
      state.currentIndex = action.payload.index;
      state.appMode = appMode.edit;
    },
    removeSelectedItem: (state, action) => {
      state.currentNote = null;
    },
    changeMode: (state, action) => {
      state.appMode = action.payload;
      state.currentNote = null;
    },
    updateCurrentNote: (state, action) => {
      state.currentNote = { ...state.currentNote, ...action.payload };
      state.notes[state.currentIndex] = state.currentNote;
    },
    addToNotes: (state, action) => {
      state.currentNote = action.payload;
      state.notes = [action.payload, ...state.notes];
      state.currentIndex = 0;
    },
  },
  extraReducers: {
    [fetchNotes.fulfilled]: (state, action) => {
      state.notes = [...action.payload];
    },
  },
});

const { actions, reducer } = noteSlice;
export const {
  selectItem,
  removeSelectedItem,
  changeMode,
  updateCurrentNote,
  addToNotes,
} = actions;
export default reducer;
