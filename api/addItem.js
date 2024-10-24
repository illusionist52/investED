import { supabase } from "@/supabase";

export default async function addItem(data, image) {
  try {
    // Step 1: Upload image to Supabase storage
    const imageFileName = `${Math.random().toString(36).substring(2)}_${image.name}`; // Generating a unique name for the image

    const { data: imageData, error: imageError } = await supabase.storage
      .from('store-items')  // Assuming 'images' is your storage bucket
      .upload(imageFileName, image);

    if (imageError) {
      throw new Error(`Image upload failed: ${imageError.message}`);
    }

    // Step 2: Get the public URL for the uploaded image
    const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/store-items/${imageFileName}`;

    // https://hjvxplpovfazqqegginc.supabase.co/storage/v1/object/public/store-items/02.png
    // Step 3: Insert data into 'Store' table, including the image URL
    const { data: insertedData, error } = await supabase
      .from('Store')
      .insert([
        {
          item_name:data.item_name,
          price:data.price,
          parent_name:"Man",
          user_id:"3490c27c-0c44-4eaa-9a9f-b4be58b80036",
          store_id:"e1dd74ac-8dd0-4da8-abbd-3989c9b94ba7",            // Inserting the passed form data
          image: imageUrl // Storing the image URL from the upload
        },
      ])
      .select(); // Fetch the inserted data back

    if (error) {
      throw new Error(`Insert failed: ${error.message}`);
    }

    return insertedData; // Return the inserted data

  } catch (e) {
    console.error("Error adding item:", e.message);
    return { error: e.message }; // Return error message
  }
}
