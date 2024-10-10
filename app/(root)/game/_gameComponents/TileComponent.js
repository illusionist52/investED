import React from "react";

// Enum to handle purchase logic
const PURCHASE_STATUS = {
  AVAILABLE: "Available",
  PURCHASED: "Purchased",
};

// Shared Tile Component
const TileComponent = ({
  name,
  subheading,
  desc,
  amount,
  action,
  enumValue,
  color,
  pawnHere,
}) => {
  return (
    <div
      // className={`flex aspect-square w-full max-w-[11vw] flex-col items-center justify-between border border-black bg-gray-200 p-4 shadow-md ${
      // pawnHere ? "bg-yellow-300" : ""
      // }`} // Highlight when pawn is here
      className={`aspect-square w-full max-w-[11vw] border border-black p-4 shadow-md bg-${color}-500 flex flex-col justify-between ${pawnHere ? "bg-yellow-300" : ""}`}
    >
      {/* Name of the tile */}
      <h2 className="truncate text-lg font-bold text-gray-800">{name}</h2>

      {/* Subheading */}
      <h3 className="truncate text-sm text-gray-500">{subheading}</h3>

      {/* Description */}
      {desc && <p className="truncate text-xs text-gray-600">{desc}</p>}

      {/* Amount/Fee */}
      <p className="text-lg font-semibold text-gray-700">
        Amount: <span className="text-green-600">₹{amount}</span>
      </p>

      {/* Action Button */}
      <div className="mt-4">
        {enumValue === PURCHASE_STATUS.AVAILABLE ? (
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
            onClick={action}
          >
            Buy Now
          </button>
        ) : (
          <button
            className="cursor-not-allowed rounded bg-gray-400 px-4 py-2 text-white"
            disabled
          >
            {enumValue}
          </button>
        )}
      </div>
    </div>
  );
};

export default TileComponent;
