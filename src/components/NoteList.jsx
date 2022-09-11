import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../app/noteSlice";
import { generateUuid } from "../app/utils";

const NoteList = () => {
  const notes = useSelector((state) => state.note.notes);
  const currentNote = useSelector((state) => state.note.currentNote);

  return (
    <div className="h-[750px] overflow-y-scroll">
      {/* {currentNote && <NoteItem key={currentNote.id} item={currentNote} />} */}
      {notes.map((item, index) => (
        <NoteItem key={index} item={{ ...item, index }} />
      ))}
    </div>
  );
};

export default NoteList;
