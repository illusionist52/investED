import React from "react";

function Stats() {
  return (
    <div className="flex flex-col gap-4 px-6 py-4 w-[30vw] border rounded-2xl border-slate-300 ">
      <h2 className="text-3xl font-bold">Stats</h2>
      <div className="flex flex-col  gap-2">
        <div className="flex items-center justify-between ">
          <h3>Modules completed </h3>
          <p>8</p>
        </div>
        <div className="flex items-center gap-80 justify-between ">
          <h3>Quizzes </h3>
          <p>6</p>
        </div>
        <div className="flex items-center justify-between ">
          <h3>Chore completed </h3>
          <p>3</p>
        </div>
        <div className="flex items-center justify-between ">
          <h3>Badges </h3>
          <p>15</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
