import { supabase } from "@/supabase";

export async function incrementVC(VCvalue, userID = '3490c27c-0c44-4eaa-9a9f-b4be58b80036') {
    try {
        console.log(userID)
        // Fetch the current virtual currency value
        const { data: userData, error: fetchError } = await supabase
            .from('User')
            .select('virtual_currency')
            .eq('user_id', userID)
            .single();

        if (fetchError) throw fetchError;

        console.log(userData);

        const previousCurr = userData.virtual_currency;

        // Update the virtual currency
        const { data, error } = await supabase
            .from('User')
            .update({
                virtual_currency: previousCurr + VCvalue,
            })
            .eq('user_id', userID);

        if (error) throw error;

        return { success: true, message: 'Virtual Currency incremented' };
    } catch (e) {
        console.error('Error updating VC:', e);
        return { success: false, message: 'Failed to update virtual currency.' };
    }
}
