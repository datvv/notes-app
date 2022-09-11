import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentNote, updateNote, upsertNote } from "../app/noteSlice";
import { formatIsoDateStr, generateUuid } from "../app/utils";

const NoteEditor = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [showCurrentTime, setShowCurrentTime] = useState(true);

  const { notes, currentNoteId, currentNote } = useSelector((state) => ({
    notes: state.note.notes,
    currentNote: state.note.currentNote,
    currentNoteId: state.note.currentNote ? state.note.currentNote.id : null,
  }));

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNoteId]);

  const handleUpdateCurrentNote = function (data, type) {
    let updatedNote = {};
    switch (type) {
      case "title":
        setTitle(data);
        updatedNote = { ...currentNote, title: data };
        break;
      case "content":
        setContent(data);
        updatedNote = { ...currentNote, content: data };
        break;
      default:
        return;
    }
    console.log("handleUpdateCurrentNote - dispatch");
    dispatch(updateCurrentNote(updatedNote));
    dispatch(updateNote(updatedNote));
  };

  return (
    <div className="border border-spacing-2 h-full">
      {currentNoteId && (
        <div>
          {showCurrentTime && (
            <h3 className="text-center p-1">
              {formatIsoDateStr(new Date().toISOString(), true)}
            </h3>
          )}
          {!showCurrentTime && (
            <h3 className="text-center p-1">
              Created:{" "}
              {formatIsoDateStr(
                currentNote ? currentNote.created_at : "",
                true
              )}
            </h3>
          )}

          <div className="px-4">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3"
              value={title}
              onChange={(e) => handleUpdateCurrentNote(e.target.value, "title")}
            />

            <textarea
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3"
              value={content}
              onChange={(e) =>
                handleUpdateCurrentNote(e.target.value, "content")
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteEditor;
