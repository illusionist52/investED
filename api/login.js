import { supabase } from "@/supabase";

export async function loginUser(userName, parentEmail) {
    try {
        // Step 1: Query the 'User' table for the given username and email
        const { data, error } = await supabase
            .from('User')
            .select('*')
            .eq('user_name', userName)
            .eq('parent_email', parentEmail)
            .single();

        if (error) throw error;

        // Check if user exists
        if (!data) {
            return { success: false, message: 'User not found.' };
        }

        // Successfully found the user
        return { success: true, userData: data, message: 'Login successful.' };
    } catch (err) {
        console.error('Error logging in:', err);
        return { success: false, message: 'Failed to log in.' };
    }
}
