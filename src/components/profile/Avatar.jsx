import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../../app/supabase/supabaseClient";

const Avatar = () => {
  const [toggleUserSetting, setToggleUserSetting] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleUserSetting(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} className="h-full ml-5 mr-5 flex items-center">
      <div className="relative inline-block text-left">
        <div>
          <img
            onClick={() => setToggleUserSetting(!toggleUserSetting)}
            className="h-[60px] w-[60px] rounded-full cursor-pointer"
            src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
            alt=""
          />
        </div>
        {toggleUserSetting && (
          <div className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div>
              <button
                onClick={() => supabase.auth.signOut()}
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-400"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
