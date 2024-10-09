import React from 'react';
import * as Icons from 'lucide-react'; // Import all icons as an object

function CategoryCard({ data, color, iconName }) {
  const IconComponent = Icons[iconName]; // Dynamically get the icon component

  return (
    <div className={`flex items-center justify-between h-[20vh] w-[18vw] p-8 rounded-[3rem] ${color}`}>
      <div className="flex flex-col items-start gap-2">
        <div className=" p-2 rounded-full bg-opacity-35 bg-gray-400 ">

        {IconComponent && <IconComponent color="black" size={28} />}
        </div>
        <div>
        <h1 className="text-3xl font-extrabold">₹{data.amount}</h1>
        <h2 className="text-sm font-bold">{data.type}</h2>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
