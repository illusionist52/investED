import React from "react";
import Sidebar from "./_components/Sidebar";

function layout({ children }) {
  return (
    <div className="flex gap-8">
      <Sidebar />
      <div>
      {children}
      </div>
    </div>
  );
}

export default layout;
