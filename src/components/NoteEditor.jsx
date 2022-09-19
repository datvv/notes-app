import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentNote, updateNote, upsertNote } from "../app/noteSlice";
import { formatIsoDateStr } from "../app/utils";

const NoteEditor = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showCurrentTime, setShowCurrentTime] = useState(true);

  const { currentNoteId, currentNote } = useSelector((state) => ({
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
    dispatch(updateCurrentNote(updatedNote));
    dispatch(updateNote(updatedNote));
  };

  return (
    <div className="border border-spacing-2 h-full">
      {currentNoteId && (
        <div>
          <h3
            className="text-center p-1 cursor-pointer text-[18px] text-gray-500"
            onClick={() => setShowCurrentTime(!showCurrentTime)}
          >
            {showCurrentTime
              ? formatIsoDateStr(new Date().toISOString(), true)
              : "Created: " +
                formatIsoDateStr(
                  currentNote ? currentNote.created_at : "",
                  true
                )}
          </h3>

          <div className="px-4">
            <input
              type="text"
              placeholder="Enter title"
              className="text-2xl font-bold bg-gray-50  text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3"
              value={title}
              onChange={(e) => handleUpdateCurrentNote(e.target.value, "title")}
            />

            <div className="border border-t-1"></div>
            <textarea
              type="text"
              id="first_name"
              rows={8}
              placeholder="Enter content"
              className="bg-gray-50  text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3"
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
