import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../app/noteSlice";

const NoteList = () => {
  const notes = useSelector((state) => state.note.notes);

  return (
    <div className="h-[750px] overflow-y-scroll">
      {/* id={item.id}
          title={item.title}
          content={item.content}
          created_at={item.created_at}
          updated_at={item.updated_at} */}

      {notes.map((item, index) => (
        <NoteItem key={index} item={item} />
      ))}
    </div>
  );
};

export default NoteList;
