import React from "react";
import { useDispatch } from "react-redux";
import { selectItem } from "../app/noteSlice";
import { formatIsoDateStr } from "../app/utils";

const NoteDashboardItem = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  return (
    <div>
      <div
        onClick={() => dispatch(selectItem(item.id))}
        className="cursor-pointer w-full h-[180px] border-2 border-gray-300 rounded-md px-3 py-3 hover:border-yellow-400 hover:border-3"
      >
        <h3 className="text-[15px] inline-block overflow-hidden text-ellipsis w-full whitespace-nowrap font-semibold">
          {item.title}
        </h3>
        <p className="text-[12px] w-full h-[80%] overflow-y-hidden overflow-x-hidden whitespace-normal">
          <span className="mr-4">{item.content}</span>
        </p>
      </div>
      <div className="mt-3">
        <h3 className="text-[18px] inline-block overflow-hidden text-ellipsis w-full whitespace-nowrap font-semibold text-center">
          {item.title}
        </h3>
        <p className="text-center text-gray-500">
          {formatIsoDateStr(
            item.updated_at ? item.updated_at : item.created_at
          )}
        </p>
      </div>
    </div>
  );
};

export default NoteDashboardItem;
