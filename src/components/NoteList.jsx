import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../app/noteSlice";

const NoteList = () => {
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  // const getNotes = async () => {
  //   let data = await fetchNotesAPI();
  //   if (data) {
  //     setNotes(data);
  //   }
  // };

  return (
    <div className="h-[750px] overflow-y-scroll">
      {notes.map((item, index) => (
        <NoteItem
          key={index}
          id={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default NoteList;
