import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteDefault } from "../app/constants";
import { selectItem } from "../app/noteSlice";
import { formatIsoDateStr } from "../app/utils";

const NoteItem = (props) => {
  const currentNoteId = useSelector((state) =>
    state.note.currentNote ? state.note.currentNote.id : null
  );
  const dispatch = useDispatch();
  const item = props.item;

  return (
    <div
      onClick={() => dispatch(selectItem(item))}
      className={`h-[90px] rounded-md m-3 p-3 cursor-pointer ${
        currentNoteId == item.id ? "bg-gray-300" : "bg-gray-100"
      } `}
    >
      <h3 className="text-[18px] inline-block overflow-hidden text-ellipsis w-full whitespace-nowrap font-bold">
        {item.title ? item.title : noteDefault.title}
      </h3>
      <p className="inline-block overflow-hidden w-full whitespace-nowrap">
        <span className="mr-4 text-gray-500">
          {formatIsoDateStr(
            item.updated_at ? item.updated_at : item.created_at
          )}
        </span>
        <span>{item.content ? item.content : noteDefault.content}</span>
      </p>
    </div>
  );
};

export default NoteItem;
