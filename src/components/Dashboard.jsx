import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../app/noteSlice";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NoteEditor from "./NoteEditor";
import NoteDashboard from "./NoteDashboard";
import { appMode } from "../app/constants";

const Dashboard = () => {
  const dispatch = useDispatch();
  const currentMode = useSelector((state) => state.note.appMode);

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  return (
    <div className="flex items-center">
      <div className="bg-gray-50 h-[80%] overflow-hidden rounded shadow-sm w-[1224px] ">
        <Header />
        <div>
          {(currentMode == appMode.edit || currentMode == appMode.create) && (
            <div className="grid grid-cols-6 h-full">
              <div className="col-span-2 h-full">
                <Sidebar />
              </div>
              <div className="col-span-4 h-full">
                <NoteEditor />
              </div>
            </div>
          )}
          {currentMode == appMode.view && <NoteDashboard />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
