import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote, fetchNotes, updateNote } from "../app/noteSlice";

const NoteEditor = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let currentNote = [];

  const { notes, activatedId } = useSelector((state) => ({
    notes: state.note.notes,
    activatedId: state.note.activatedId,
  }));

  useEffect(() => {
    currentNote = notes.filter((item) => item.id == activatedId);
  }, [activatedId, notes]);

  useEffect(() => {
    if (currentNote && currentNote.length > 0) {
      setTitle(currentNote[0].title);
      setContent(currentNote[0].content);
    }
  }, [currentNote]);

  const handleCreate = () => {
    dispatch(createNote({ title, content }));
  };
  const handleUpdate = () => {
    dispatch(updateNote({ id: activatedId, title, content }));
  };

  return (
    <div className="border border-spacing-2 h-full">
      <h3 className="text-center">Time</h3>
      <div className="px-4">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={() => handleCreate()}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
        >
          Create
        </button>
        <button
          onClick={() => handleUpdate()}
          type="button"
          disabled={!activatedId}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none disabled:opacity-70"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default NoteEditor;
