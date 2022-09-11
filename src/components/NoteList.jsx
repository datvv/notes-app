import React from "react";
import NoteItem from "./NoteItem";
import { useSelector } from "react-redux";

const NoteList = () => {
  const notes = useSelector((state) => state.note.notes);

  return (
    <div className="h-[750px] overflow-y-scroll">
      {notes.map((item, index) => (
        <NoteItem key={index} item={{ ...item, index }} />
      ))}
    </div>
  );
};

export default NoteList;
