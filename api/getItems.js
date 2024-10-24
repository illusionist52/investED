import { supabase } from "@/supabase";

export default async function getItems(userId = "3490c27c-0c44-4eaa-9a9f-b4be58b80036") {
  try {
    const { data: Store, error } = await supabase
      .from('Store')
      .select('*')
      .eq('user_id', userId)

    if (error) {
      throw error; // Throw the error to be caught in the catch block
    }

    return Store; // Return the fetched Store data
  } catch (e) {
    console.error("Error fetching items:", e); // Log the error for debugging
    return null; // Return null or a meaningful value in case of an error
  }
}
