import React from "react";
import Banner from "./_components/banner";
import Stats from "./_components/stats";
import Strore from "./_components/Strore";
import Goal from "./_components/Goal";
import Badges from "./_components/Badges";
import History from "./_components/History";
import ProgressBar from "./_components/ProgressBar";

function page() {
  return (
    <div className="flex flex-col  gap-16 items-center justify-center mb-10 p-5">
      <div className=" bg-purple-300 w-full    h-[35vh] ">
        <img
          className="rounded-full absolute left-[46%] z-10 top-32 w-32"
          src="https://media.licdn.com/dms/image/D4E03AQF7NrEI5z-01A/profile-displayphoto-shrink_800_800/0/1714068683049?e=1724889600&v=beta&t=9VOg4NRhtoIBROk0BDya_Cpp0pye8t1E5tMlLxC81GE"
          alt=""
        />
      </div>
      <div>
        <Banner />
      </div>
      <ProgressBar />
      <div className="flex gap-x-16 px-10">
        <div className="flex flex-col gap-x-4 gap-y-8">
          <Goal />
          <Stats />
        </div>
        <Strore />
      </div>
      <div className="flex gap-x-16 -mt-8 px-10">
        <Badges />
        <History />
      </div>
    </div>
  );
}

export default page;
