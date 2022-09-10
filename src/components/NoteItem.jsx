import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../app/noteSlice";
import { formatIsoDateStr } from "../app/utils";

const NoteItem = (props) => {
  const activatedId = useSelector((state) => state.note.activatedId);
  const dispatch = useDispatch();
  const item = props.item;

  return (
    <div
      onClick={() => dispatch(selectItem(item.id))}
      className={`h-[90px] rounded-md m-3 p-3 cursor-pointer ${
        activatedId == item.id ? "bg-gray-300" : "bg-gray-100"
      } `}
    >
      <h3 className="text-[18px] inline-block overflow-hidden text-ellipsis w-full whitespace-nowrap font-bold">
        {item.title}
      </h3>
      <p className="inline-block overflow-hidden w-full whitespace-nowrap">
        <span className="mr-4 text-gray-500">
          {formatIsoDateStr(
            item.updated_at ? item.updated_at : item.created_at
          )}
        </span>
        <span>{item.content}</span>
      </p>
    </div>
  );
};

export default NoteItem;
