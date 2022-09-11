import React from "react";
import Avatar from "./profile/Avatar";
import FunctionList from "./FunctionList";

const Header = () => {
  return (
    <div className="border border-b-3 border-spacing-5 h-[80px] items-center">
      <div className="w-[90%] block float-left h-full">
        <FunctionList />
      </div>
      <div className="block float-right h-full">
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
