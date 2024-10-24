import { supabase } from "@/supabase";
export async function getParent(userId = '3490c27c-0c44-4eaa-9a9f-b4be58b80036') {
  try {
    // Filter transactions by user ID
    
    let { data: User, error } = await supabase
    .from('User')
    .select('*')
    .eq('user_id',userId)

    if (error) {
      console.error(`Error fetching Users: ${error.message}`);
      throw new Error(`Error fetching Users: ${error.message}`);
    }
    return User;  // Return the transactions array
  } catch (e) {
    console.error("An error occurred while fetching Users:", e.message);
  }
}
