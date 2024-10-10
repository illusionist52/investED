import { supabase } from "@/supabase";
export async function getTransactionsByUserId(userId = '3490c27c-0c44-4eaa-9a9f-b4be58b80036') {
  try {
    // Filter transactions by user ID
    let { data: transactions, error } = await supabase
      .from('Transactions')
      .select('*')
      .eq('user_id', userId);  // Add this to filter by the userId

    if (error) {
      console.error(`Error fetching transactions: ${error.message}`);
      throw new Error(`Error fetching transactions: ${error.message}`);
    }
    return transactions;  // Return the transactions array
  } catch (e) {
    console.error("An error occurred while fetching transactions:", e.message);
    return [];  // Return an empty array in case of an error
  }
}
