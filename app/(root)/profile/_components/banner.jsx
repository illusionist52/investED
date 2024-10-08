import React from "react";

function Banner() {
  return (
    <div className="flex gap-16 shadow-xl items-center bg-white border border-slate-300 rounded-2xl px-6 py-4 ">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-2xl  font-normal">
          Streaks{" "}
        </h2>
        <h3 className="text-3xl  font-semibold ">12</h3>
      </div>
      <div className="h-16 border"></div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-2xl  font-normal ">Badges </h2>
        <h3 className="text-3xl  font-semibold ">12</h3>
      </div>
      <div className="flex flex-col gap-4 w-[400px] items-center ">
        <h2 className="text-2xl font-bold   ">
          Mohd Usmaan Mogal{" "}
        </h2>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-2xl  font-normal ">Rank </h2>
        <h3 className="text-3xl  font-semibold ">Master</h3>
      </div>

      <div className="h-16 border"></div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-2xl  font-normal ">VC </h2>
        <h3 className="text-3xl  font-semibold ">1300</h3>
      </div>
    </div>
  );
}

export default Banner;
