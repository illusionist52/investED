// lib/supabaseModule.js
import { supabase } from "@/supabase";

export async function getModuleBySlug(slug) {
  try {
    // Fetch the module by slug
    const { data: moduleData, error } = await supabase
      .from('LearningModules') // Ensure this matches your table name
      .select('*')
      .eq('slug', slug)
      .single(); // Fetch a single module

    if (error) {
      console.error(`Error fetching module: ${error.message}`);
      throw new Error(`Error fetching module: ${error.message}`);
    }

    return moduleData; // Return the module data
  } catch (e) {
    console.error("An error occurred while fetching the module:", e.message);
    return null; // Return null in case of an error
  }
}