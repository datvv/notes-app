import React from "react";

const NoteItem = () => {
  return (
    <div className="h-[90px] bg-gray-300 rounded-md m-3 p-3">
      <h3 className="inline-block overflow-hidden text-ellipsis w-full whitespace-nowrap font-semibold">
        Tech challenge abc 1232 sdfdsfdsfsdfdsfdsfsdfdsfdsfsdfdsfdsfsdfdsfdsf
        sdfdsfdsf
      </h3>
      <p className="inline-block overflow-hidden w-full whitespace-nowrap">
        <span className="mr-4">{new Date().toLocaleTimeString()}</span>
        <span>
          Aljdsf adsflj sadf sdfdsfdsfsdfdsfdsfsdfdsfdsfsdfdsfdsfsdfdsfdsf
          sdfdsfdsfsdfdsfdsfsdfdsfdsfsdfdsfdsfsdfdsfdsf
        </span>
      </p>
    </div>
  );
};

export default NoteItem;
