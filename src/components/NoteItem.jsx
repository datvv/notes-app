import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../app/noteSlice";

const NoteItem = (props) => {
  const activatedId = useSelector((state) => state.note.activatedId);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(selectItem(props.id))}
      className={`h-[90px] rounded-md m-3 p-3 ${
        activatedId == props.id ? "bg-gray-300" : "bg-gray-100"
      } `}
    >
      <h3 className="inline-block overflow-hidden text-ellipsis w-full whitespace-nowrap font-semibold">
        {props.title}
      </h3>
      <p className="inline-block overflow-hidden w-full whitespace-nowrap">
        <span className="mr-4">{new Date().toLocaleTimeString()}</span>
        <span>{props.content}</span>
      </p>
    </div>
  );
};

export default NoteItem;
