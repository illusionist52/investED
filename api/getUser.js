import { supabase } from "@/supabase";

export default async function getUser() {
  try {
    let { data: user, error } = await supabase
      .from('User')
      .select('*')
      .eq('user_id', "3490c27c-0c44-4eaa-9a9f-b4be58b80036")
      .single(); // Use .single() if you expect only one result

    if (error) {
      console.error("Error fetching user:", error);
      return null; // Return null or handle the error as needed
    }

    return user; // Return the user data
  } catch (e) {
    console.error("Error executing query:", e);
    return null; // Return null or handle the error as needed
  }
}
