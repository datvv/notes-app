import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote, updateNote } from "../app/noteSlice";
import { formatIsoDateStr } from "../app/utils";

const NoteEditor = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [currentNote, setCurrentNote] = useState(null);
  const [showCurrentTime, setShowCurrentTime] = useState(true);

  const { notes, activatedId } = useSelector((state) => ({
    notes: state.note.notes,
    activatedId: state.note.activatedId,
  }));

  useEffect(() => {
    let selectedItem = notes.filter((item) => item.id == activatedId);
    setCurrentNote(selectedItem[0] ? selectedItem[0] : null);
  }, [activatedId, notes]);

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
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
      {showCurrentTime && (
        <h3 className="text-center p-1">
          {formatIsoDateStr(new Date().toISOString(), true)}
        </h3>
      )}
      {!showCurrentTime && (
        <h3 className="text-center p-1">
          Created:{" "}
          {formatIsoDateStr(currentNote ? currentNote.created_at : "", true)}
        </h3>
      )}
      <div className="px-4">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3"
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
