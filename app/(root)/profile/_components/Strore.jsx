import React from "react";

function Strore() {
  return (
    <div className="w-[800px] border h-[55vh] bg-white flex flex-col gap-4 px-4 py-2 border-slate-300 rounded-2xl">
      <h2 className="text-3xl font-bold">Store</h2>
      <div className="grid gap-4 grid-rows-2 grid-cols-3">
        {/* 1ST CARD */}
        <a href="#" className="group  block overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS1IJR20uUHox8eNBUuuPI7QCyj5lxUK7IPjbWpVdYGcX73FMu3rKmxVLlY7g40Fb-bi4unbgMLJ_yFPBD7Vg2c6vbvrWuGapPfY26GLszA06Eg8hMohQ-bOg&usqp=CAE"
            alt=""
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className=" border border-gray-100 bg-white p-2">
            <h3 className=" text-lg font-medium text-gray-900">
              Harry Potter Novel
            </h3>
            <p className="mt-1.5 text-sm font-semibold text-gray-500">900 VC</p>
            <form className="mt-4">
              <button className="block w-full text-white font-bold rounded bg-purple-400 p-2 text-sm transition hover:scale-105">
                Request
              </button>
            </form>
          </div>
        </a>

        {/* 2ND CARD */}
        <a href="#" className="group  block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
            alt=""
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 "
          />

          <div className=" border border-gray-100 bg-white p-2">
            <h3 className=" text-lg font-medium text-gray-900">Transformers</h3>

            <p className="mt-1.5 text-sm font-semibold text-gray-500">500 VC</p>

            <form className="mt-4">
              <button className="block w-full text-white font-bold rounded bg-purple-400 p-2 text-sm transition hover:scale-105">
                Request
              </button>
            </form>
          </div>
        </a>

        {/* 3RD CARD */}
        <a href="#" className="group  block overflow-hidden">
          <img
            src="https://store.fifa.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0615%2F4456%2F2874%2Ffiles%2F230328_FIFA_FIFA2438_ECOM0844.jpg%3Fv%3D1685562902&w=1200&q=50"
            alt=""
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 "
          />

          <div className=" border border-gray-100 bg-white p-2">
            <h3 className=" text-lg font-medium text-gray-900">Football</h3>

            <p className="mt-1.5 text-sm font-semibold text-gray-500">900 VC</p>

            <form className="mt-4">
              <button className="block w-full text-white font-bold rounded bg-purple-400 p-2 text-sm transition hover:scale-105">
                Request
              </button>
            </form>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Strore;
