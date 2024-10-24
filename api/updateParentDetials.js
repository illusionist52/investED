import { supabase } from "@/supabase";

// export async function updateParentDetails(parentEmail, parentName, userId) {
export async function updateParentDetails(parentEmail, parentName) {
    try {
      const { data, error } = await supabase
        .from('Parent')
        .update({
          parent_name: parentName
        })
        .eq('parent_email', parentEmail)
        // .eq('user_id', userId); // Ensure the update is linked to the correct user
  
      if (error) throw error;
  
      return { success: true, message: 'Parent details updated successfully.' };
    } catch (e) {
      console.error('Error updating parent details:', e);
      return { success: false, message: 'Failed to update parent details.' };
    }
  }
  