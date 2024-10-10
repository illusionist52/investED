import React from "react";

const ProgressBar = () => {
  return (
    <div className="mt-14 flex justify-center items-center">
      <div className="container text-center mx-auto w-[800px]">
        <div className="bg-black bg-opacity-10 p-1.5 rounded-lg shadow-inner">
          <div
            className="h-4 bg-purple-500 rounded-md"
            style={{ width: "70%" }}
          ></div>
        </div>
        <p className="font-semibold text-xl">1,500 XP to Grand Master</p>
      </div>
    </div>
  );
};

export default ProgressBar;
