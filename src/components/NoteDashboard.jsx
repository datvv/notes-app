import React from "react";
import { useSelector } from "react-redux";
import NoteDashboardItem from "./NoteDashboardItem";

const NoteDashboard = () => {
  const notes = useSelector((state) => state.note.notes);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-6">
      {notes.map((item, index) => (
        <NoteDashboardItem key={index} item={{ ...item, index }} />
      ))}
    </div>
  );
};

export default NoteDashboard;
