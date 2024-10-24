"use client"; // This ensures that the component is rendered on the client side
import getItems from "@/api/getItems";
import decrementVC from "@/api/decrementVC";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Strore() {
  const [items, setItems] = useState([]); // State to hold items data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await getItems(); // Fetch items using the getItems function
        if (fetchedItems) {
          setItems(fetchedItems); // Set the items data if fetched
        } else {
          setError(new Error("No items found.")); // Set an error if no items are fetched
        }
      } catch (err) {
        setError(err); // Handle any error that occurs
      } finally {
        setLoading(false); // Set loading to false once the fetching is done
      }
    };

    fetchItems(); // Call the function to fetch items data
  }, []); // Empty dependency array to run only once on mount

  if (loading) {
    return <p>Loading items...</p>; // Loading state
  }

  const handleVC = async (price) => {
    try {
      const result = await decrementVC(price);
      toast.success(`${result.message} by ${price} points`)
    }catch(e){
      console.log("Error occured", e);
    }
  }

  return (
    <div className="w-[800px] border h-[55vh]  bg-white flex flex-col gap-4 px-4 py-2 border-slate-300 rounded-2xl">
      <h2 className="text-3xl font-bold">Store</h2>
      <div className="grid gap-4 grid-rows-2 grid-cols-3">
        {error ? (
          <p>Error fetching items: {error.message}</p> // Error handling
        ) : items.length > 0 ? (
          items.map((item) => (
            <a key={item.id} href="#" className="group block overflow-hidden">
              <img
                src={item.image} // Use the image URL from the fetched item
                alt={item.name} // Use the name for the alt attribute
                className="h-48"
              />
              <div className="border border-gray-100 bg-white p-2">
                <h3 className="text-lg font-medium text-gray-900">{item.item_name}</h3>
                <p className="mt-1.5 text-sm font-semibold text-gray-500">
                  {item.price} VC
                </p>
                <form className="mt-4">
                  <button onClick={handleVC(item.price)} className="block w-full text-white font-bold rounded bg-purple-400 p-2 text-sm transition hover:scale-105">
                    Request
                  </button>
                </form>
              </div>
            </a>
          ))
        ) : (
          <p>No items found.</p> // Fallback if no items are found
        )}
      </div>
    </div>
  );
}

export default Strore;
