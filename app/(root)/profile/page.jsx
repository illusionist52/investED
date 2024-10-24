"use client";
import React, { useEffect, useState } from "react";
import Banner from "./_components/banner";
import Stats from "./_components/stats";
import Strore from "./_components/Strore";
import Goal from "./_components/Goal";
import Badges from "./_components/Badges";
import History from "./_components/History";
import ProgressBar from "./_components/ProgressBar";
import getUser from "@/api/getUser";

function Page() {
  const [user, setUser] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const fetchedUser = await getUser();
        setUser(fetchedUser); // Set the user data
      } catch (err) {
        setError(err); // Handle any error that occurs
      } finally {
        setLoading(false); // Set loading to false once the fetching is done
      }
    };

    fetchUserData(); // Call the function to fetch user data
  }, []); // Empty dependency array to run only once on mount

  if (loading) {
    return <p>Loading...</p>; // Loading state
  }

  if (error) {
    return <p>Error fetching user data: {error.message}</p>; // Error handling
  }

  return (
    <div className="flex flex-col relative gap-6 items-center justify-center mb-10 p-5">
      <div className="bg-purple-300 mt-10 w-full rounded-3xl h-[30vh]">
        <img
          className="rounded-full absolute left-[44%] z-10 top-36 w-48"
          src="https://hjvxplpovfazqqegginc.supabase.co/storage/v1/object/public/store-items/photo.jpg"
          alt=""
        />
      </div>
      <div>
        <Banner user={user} />
      </div>
      <ProgressBar />
      <div className="flex gap-x-16 px-10">
        <div className="flex flex-col gap-x-4 gap-y-8">
          <Goal goal={user?.goal ?? "N/A"} /> {/* Provide default value if user is null */}
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

export default Page;
