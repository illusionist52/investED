import React from "react";
import Sidebar from "./_components/Sidebar";

function layout({ children }) {
  return (
    <div className="flex  bg-purple-100 ">
      <Sidebar />
      <div className ="pl-20 w-[100%] h-[100vh] overflow-x-auto hide-scrollbar">
      {children}
      </div>
    </div>
  );
}

export default layout;
