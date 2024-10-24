import { supabase } from "@/supabase";

export async function getAllModules() {
  try {
    
    let { data: LearningModules, error } = await supabase
    .from('LearningModules')
    .select('*')

    if (error) {
      console.error(`Error fetching modules: ${error.message}`);
      throw new Error(`Error fetching modules: ${error.message}`);
    }

    return LearningModules; // Return the array of modules
  } catch (e) {
    console.error("An error occurred while fetching modules:", e.message);
    return []; // Return an empty array in case of an error
  }
}