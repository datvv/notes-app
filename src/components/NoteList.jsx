import React from "react";
import NoteItem from "./NoteItem";
import { useSelector } from "react-redux";

const NoteList = () => {
  const notes = useSelector((state) => state.note.notes);

  return (
    <div className="h-[750px] overflow-y-scroll">
      {notes.length != 0 &&
        notes.map((item, index) => (
          <NoteItem key={index} item={{ ...item, index }} />
        ))}
      {notes.length == 0 && (
        <div className="flex text-center text-2xl items-center justify-center text-gray-500 h-full">
          No Notes
        </div>
      )}
    </div>
  );
};

export default NoteList;
