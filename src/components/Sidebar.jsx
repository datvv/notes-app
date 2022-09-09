import React from "react";
import NoteList from "./NoteList";

const Sidebar = () => {
  return (
    <div className="border border-spacing-2 border-r-2 h-full">
      <NoteList />
    </div>
  );
};

export default Sidebar;
