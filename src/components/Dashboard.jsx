import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../app/noteSlice";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NoteEditor from "./NoteEditor";
import NoteDashboard from "./NoteDashboard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const editable = useSelector((state) => state.note.editable);

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  return (
    <div className="bg-gray-50 h-[80%] overflow-hidden rounded shadow-sm w-[1224px]">
      <Header />
      <div>
        {editable && (
          <div className="grid grid-cols-6 h-full">
            <div className="col-span-2 h-full">
              <Sidebar />
            </div>
            <div className="col-span-4 h-full">
              <NoteEditor />
            </div>
          </div>
        )}
        {!editable && <NoteDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
