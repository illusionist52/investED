import { supabase } from "@/supabase";

export async function addTransaction(transactionData) {
  try {
    const { data, error } = await supabase
      .from('Transactions')
      .insert([{
        transaction_id: transactionData.transaction_id,
        created_at: transactionData.created_at,
        updated_at: transactionData.updated_at,
        amount: transactionData.amount,
        description: transactionData.description,
        date: transactionData.date,
        user_id: transactionData.user_id,
        type: transactionData.type,
        category: transactionData.category,
        category_icon: transactionData.category_icon,
      }])
      .select();

    if (error) throw error;
    return data;
  } catch (e) {
    console.error('Error inserting transaction:', e);
    return null;
  }
}
