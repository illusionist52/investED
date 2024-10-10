// "use client";

// import React, { useState } from "react";
// import TileComponent from "./TileComponent";

// const GaemBoard = () => {
//   /// Function to handle the action for "Market Boom" tile
//   const handleMarketBoom = (setBalance) => {
//     const gain = 1000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Market Boom!`);
//   };

//   // Function to handle the action for "HSBC Mid Cap Fund" tile
//   const handleHSBCMidCapFund = (setBalance) => {
//     const gain = 5000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from HSBC Mid Cap Fund!`);
//   };

//   // Function to handle the action for "Ghaktkopar - 3bhk" tile
//   const handleGhaktkopar3Bhk = (setBalance) => {
//     const gain = 10000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Ghaktkopar - 3bhk!`);
//   };

//   // Function to handle the action for "Bank of India - FD" tile
//   const handleBankOfIndiaFD = (setBalance) => {
//     const gain = 2000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Bank of India - FD!`);
//   };

//   // Function to handle the action for "Adani Enterprise Stock" tile
//   const handleAdaniEnterpriseStock = (setBalance) => {
//     const gain = 1500;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Adani Enterprise Stock!`);
//   };

//   // Function to handle the action for "Go to Audit" tile
//   const handleGoToAudit = (setBalance) => {
//     alert("You went to audit! No changes to your balance.");
//   };

//   // Function to handle the action for "National Savings Certificate" tile
//   const handleNationalSavingsCertificate = (setBalance) => {
//     const gain = 3000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from National Savings Certificate!`);
//   };

//   // Function to handle the action for "Axis Bank Stock" tile
//   const handleAxisBankStock = (setBalance) => {
//     const gain = 2000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Axis Bank Stock!`);
//   };

//   // Function to handle the action for "ITC Mutual Fund" tile
//   const handleITCMutualFund = (setBalance) => {
//     const gain = 2500;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from ITC Mutual Fund!`);
//   };

//   // Function to handle the action for "Investment in Gold" tile
//   const handleInvestmentInGold = (setBalance) => {
//     const gain = 5000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Investment in Gold!`);
//   };

//   // Function to handle the action for "Tata Power Stock" tile
//   const handleTataPowerStock = (setBalance) => {
//     const gain = 1200;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Tata Power Stock!`);
//   };

//   // Function to handle the action for "Cocacola India Stock" tile
//   const handleCocacolaIndiaStock = (setBalance) => {
//     const gain = 1800;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Cocacola India Stock!`);
//   };

//   // Function to handle the action for "HDFC Bank - FD" tile
//   const handleHDFCBankFD = (setBalance) => {
//     const gain = 4000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from HDFC Bank - FD!`);
//   };

//   // Function to handle the action for "Real Estate Investment" tile
//   const handleRealEstateInvestment = (setBalance) => {
//     const gain = 20000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Real Estate Investment!`);
//   };

//   // Function to handle the action for "Bharat Petroleum Stock" tile
//   const handleBharatPetroleumStock = (setBalance) => {
//     const gain = 1600;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Bharat Petroleum Stock!`);
//   };

//   // Function to handle the action for "Nippon India Mutual Fund" tile
//   const handleNipponIndiaMutualFund = (setBalance) => {
//     const gain = 3500;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Nippon India Mutual Fund!`);
//   };

//   // Function to handle the action for "SBI Long-Term FD" tile
//   const handleSBILongTermFD = (setBalance) => {
//     const gain = 7000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from SBI Long-Term FD!`);
//   };

//   // Function to handle the action for "Kotak Mahindra Stock" tile
//   const handleKotakMahindraStock = (setBalance) => {
//     const gain = 2200;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Kotak Mahindra Stock!`);
//   };

//   // Function to handle the action for "Gold ETF" tile
//   const handleGoldETF = (setBalance) => {
//     const gain = 4500;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from Gold ETF!`);
//   };

//   // Function to handle the action for "ICICI Prudential Mutual Fund" tile
//   const handleICICIPrudentialMutualFund = (setBalance) => {
//     const gain = 3000;
//     setBalance((prev) => prev + gain);
//     alert(`You gained ₹${gain} from ICICI Prudential Mutual Fund!`);
//   };

//   const tiles = [
//     {
//       id: 0,
//       name: "Market Boom",
//       subheading: "Stock",
//       amount: 1000,
//       action: handleMarketBoom,
//     },
//     {
//       id: 1,
//       name: "HSBC Mid Cap Fund",
//       subheading: "Mutual Fund",
//       amount: 5000,
//       action: handleHSBCMidCapFund,
//     },
//     {
//       id: 2,
//       name: "Ghaktkopar - 3bhk",
//       subheading: "House",
//       amount: 10000,
//       action: handleGhaktkopar3Bhk,
//     },
//     {
//       id: 3,
//       name: "Bank of India - FD",
//       subheading: "Fixed Deposit",
//       amount: 2000,
//       action: handleBankOfIndiaFD,
//     },
//     {
//       id: 4,
//       name: "Adani Enterprise Stock",
//       subheading: "Stock",
//       amount: 1500,
//       action: handleAdaniEnterpriseStock,
//     },
//     {
//       id: 5,
//       name: "Go to Audit",
//       subheading: "Audit",
//       amount: 0,
//       action: handleGoToAudit,
//     },
//     {
//       id: 6,
//       name: "National Savings Certificate",
//       subheading: "Fixed Deposit",
//       amount: 3000,
//       action: handleNationalSavingsCertificate,
//     },
//     {
//       id: 7,
//       name: "Axis Bank Stock",
//       subheading: "Stock",
//       amount: 2000,
//       action: handleAxisBankStock,
//     },
//     {
//       id: 8,
//       name: "ITC Mutual Fund",
//       subheading: "Mutual Fund",
//       amount: 2500,
//       action: handleITCMutualFund,
//     },
//     {
//       id: 9,
//       name: "Investment in Gold",
//       subheading: "Asset",
//       amount: 5000,
//       action: handleInvestmentInGold,
//     },
//     {
//       id: 10,
//       name: "Tata Power Stock",
//       subheading: "Stock",
//       amount: 1200,
//       action: handleTataPowerStock,
//     },
//     {
//       id: 11,
//       name: "Cocacola India Stock",
//       subheading: "Stock",
//       amount: 1800,
//       action: handleCocacolaIndiaStock,
//     },
//     {
//       id: 12,
//       name: "HDFC Bank - FD",
//       subheading: "Fixed Deposit",
//       amount: 4000,
//       action: handleHDFCBankFD,
//     },
//     {
//       id: 13,
//       name: "Real Estate Investment",
//       subheading: "House",
//       amount: 20000,
//       action: handleRealEstateInvestment,
//     },
//     {
//       id: 14,
//       name: "Bharat Petroleum Stock",
//       subheading: "Stock",
//       amount: 1600,
//       action: handleBharatPetroleumStock,
//     },
//     {
//       id: 15,
//       name: "Nippon India Mutual Fund",
//       subheading: "Mutual Fund",
//       amount: 3500,
//       action: handleNipponIndiaMutualFund,
//     },
//     {
//       id: 16,
//       name: "SBI Long-Term FD",
//       subheading: "Fixed Deposit",
//       amount: 7000,
//       action: handleSBILongTermFD,
//     },
//     {
//       id: 17,
//       name: "Kotak Mahindra Stock",
//       subheading: "Stock",
//       amount: 2200,
//       action: handleKotakMahindraStock,
//     },
//     {
//       id: 18,
//       name: "Gold ETF",
//       subheading: "Asset",
//       amount: 4500,
//       action: handleGoldETF,
//     },
//     {
//       id: 19,
//       name: "ICICI Prudential Mutual Fund",
//       subheading: "Mutual Fund",
//       amount: 3000,
//       action: handleICICIPrudentialMutualFund,
//     },
//   ];

//   const [pawnPosition, setPawnPosition] = useState(0); // Track pawn's position
//   const [balance, setBalance] = useState(10000); // Player's initial balance

//   // Function to handle movement of the pawn
//   const movePawn = () => {
//     const newPosition = (pawnPosition + 1) % tiles.length; // Move pawn forward
//     setPawnPosition(newPosition);

//     // Call the action for the new tile
//     console.log(newPosition);
//     tiles[newPosition].action(setBalance);
//   };

//   return (
//     <>
//       <h1 className="mb-4 text-3xl font-bold">Balance: ₹{balance}</h1>
//       <button
//         className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
//         onClick={movePawn}
//       >
//         Move Pawn
//       </button>
//       <div className="flex w-full flex-col">
//         {/* Top Row (6 Tiles) */}
//         <div className="flex">
//           {tiles.slice(0, 6).map((tile, index) => (
//             <TileComponent
//               key={tile.id}
//               name={tile.name}
//               subheading={tile.subheading}
//               amount={tile.amount}
//               pawnHere={pawnPosition === index} // Highlight if pawn is here
//             />
//           ))}
//         </div>

//         {/* Middle Row with Investmania Logo */}
//         <div className="flex">
//           <div className="flex flex-col">
//             {tiles.slice(6, 10).map((tile, index) => (
//               <TileComponent
//                 key={tile.id}
//                 name={tile.name}
//                 subheading={tile.subheading}
//                 amount={tile.amount}
//                 pawnHere={pawnPosition === index + 6} // Adjust index for pawn position
//               />
//             ))}
//           </div>

//           <div className="flex w-[44vw] -rotate-45 items-center justify-center text-[7rem] font-black">
//             Investmania
//           </div>

//           <div className="flex flex-col">
//             {tiles.slice(10, 14).map((tile, index) => (
//               <TileComponent
//                 key={tile.id}
//                 name={tile.name}
//                 subheading={tile.subheading}
//                 amount={tile.amount}
//                 pawnHere={pawnPosition === index + 10} // Adjust index for pawn position
//               />
//             ))}
//           </div>
//         </div>

//         {/* Bottom Row (6 Tiles) */}
//         <div className="flex">
//           {tiles.slice(14, 20).map((tile, index) => (
//             <TileComponent
//               key={tile.id}
//               name={tile.name}
//               subheading={tile.subheading}
//               amount={tile.amount}
//               pawnHere={pawnPosition === index + 14} // Highlight if pawn is here
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default GaemBoard;

"use client";

import React, { useState } from "react";
import TileComponent from "./TileComponent";

const GaemBoard = () => {
  const initialBalance = 10000; // Player's initial balance
  const [pawnPosition, setPawnPosition] = useState(0);
  const [balance, setBalance] = useState(initialBalance);

  const tileActions = {
    "Market Boom": 1000,
    "HSBC Mid Cap Fund": 5000,
    "Ghaktkopar - 3bhk": 10000,
    "Bank of India - FD": 2000,
    "Adani Enterprise Stock": 1500,
    "Go to Audit": 0,
    "National Savings Certificate": 3000,
    "Axis Bank Stock": 2000,
    "ITC Mutual Fund": 2500,
    "Investment in Gold": 5000,
    "Tata Power Stock": 1200,
    "Cocacola India Stock": 1800,
    "HDFC Bank - FD": 4000,
    "Real Estate Investment": 20000,
    "Bharat Petroleum Stock": 1600,
    "Nippon India Mutual Fund": 3500,
    "SBI Long-Term FD": 7000,
    "Kotak Mahindra Stock": 2200,
    "Gold ETF": 4500,
    "ICICI Prudential Mutual Fund": 3000,
  };

  // Function to handle the action based on tile name
  const handleTileAction = (tileName) => {
    const gain = tileActions[tileName];
    if (gain > 0) {
      setBalance((prev) => prev + gain);
      alert(`You gained ₹${gain} from ${tileName}!`);
    } else {
      alert("You went to audit! No changes to your balance.");
    }
  };

  const movePawn = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    const newPosition =
      (pawnPosition + diceRoll) % Object.keys(tileActions).length;

    setPawnPosition(newPosition);
    const tileName = Object.keys(tileActions)[newPosition];
    handleTileAction(tileName);
  };

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Balance: ₹{balance}</h1>
      <button
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={movePawn}
      >
        Move Pawn
      </button>
      <div className="flex w-full flex-col">
        {/* Top Row (6 Tiles) */}
        <div className="flex">
          {Object.keys(tileActions)
            .slice(0, 6)
            .map((tileName, index) => (
              <TileComponent
                key={tileName}
                name={tileName}
                subheading={tileName.split(" ")[0]} // Simplified subheading example
                amount={tileActions[tileName]}
                pawnHere={pawnPosition === index}
              />
            ))}
        </div>

        {/* Middle Row with Investmania Logo */}
        <div className="flex">
          <div className="flex flex-col">
            {Object.keys(tileActions)
              .slice(10, 14)
              .map((tileName, index) => (
                <TileComponent
                  key={tileName}
                  name={tileName}
                  subheading={tileName.split(" ")[0]} // Simplified subheading example
                  amount={tileActions[tileName]}
                  pawnHere={pawnPosition === index + 10}
                />
              ))}
          </div>

          <div className="flex w-[44vw] -rotate-45 items-center justify-center text-[7rem] font-black">
            Investmania
          </div>

          <div className="flex flex-col">
            {Object.keys(tileActions)
              .slice(6, 10)
              .map((tileName, index) => (
                <TileComponent
                  key={tileName}
                  name={tileName}
                  subheading={tileName.split(" ")[0]} // Simplified subheading example
                  amount={tileActions[tileName]}
                  pawnHere={pawnPosition === index + 6}
                />
              ))}
          </div>
        </div>

        {/* Bottom Row (6 Tiles) */}
        <div className="flex">
          {Object.keys(tileActions)
            .slice(14)
            .map((tileName, index) => (
              <TileComponent
                key={tileName}
                name={tileName}
                subheading={tileName.split(" ")[0]} // Simplified subheading example
                amount={tileActions[tileName]}
                pawnHere={pawnPosition === index + 14}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default GaemBoard;
