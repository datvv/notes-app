import React from "react";
import Avatar from "./profile/Avatar";
import FunctionList from "./FunctionList";

const Header = () => {
  return (
    <div className="border border-b-3 border-spacing-5 h-[80px] flex items-center">
      <div className="w-[90%]">
        <FunctionList />
      </div>
      <div className="h-[80%]">
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
