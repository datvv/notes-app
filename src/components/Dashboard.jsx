import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NoteEditor from "./NoteEditor";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 h-[80%] overflow-hidden rounded shadow-sm w-[1224px]">
      <Header />
      <div className="grid grid-cols-6 h-full">
        <div className="col-span-2 h-full">
          <Sidebar />
        </div>
        <div className="col-span-4 h-full">
          <NoteEditor />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
