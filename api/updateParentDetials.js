import { supabase } from "@/supabase";
import bcrypt from 'bcryptjs';

export async function updateParentDetails(parentEmail, parentName, password) {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const { data, error } = await supabase
            .from('Parent')
            .update({
                parent_name: parentName,
                password: hashedPassword
            })
            .eq('parent_email', parentEmail);

        if (error) throw error;

        return { success: true, message: 'Parent details updated successfully.' };
    } catch (e) {
        console.error('Error updating parent details:', e);
        return { success: false, message: 'Failed to update parent details.' };
    }
}
