import { supabase } from "@/supabase";
import { generateOTP, sendOTPEmail } from "./generateAndCallOTP";

// Combined function for sign up
export async function signUpUser(userData) {
  try{
    const otp = generateOTP();

  // Step 1: Insert user details into the 'User' table
  const { data: userDataResult, error: userError } = await supabase
    .from('User')
    .insert([{ 
      user_name: userData.user_name, 
      full_name: userData.full_name, 
      parent_email: userData.parent_email, 
      virtual_currency: userData.virtual_currency,
      modules_completed: userData.modules_completed,
      rank: userData.rank,
      streaks: userData.streaks,
      goal: userData.goal,
      badges_list: userData.badges_list 
    }])
    .select();

  if (userError) throw userError;

  const userId = userDataResult[0]?.user_id;

  // Step 2: Insert parent details into the 'Parent' table
  const { data: parentDataResult, error: parentError } = await supabase
    .from('Parent')
    .insert([{
      parent_name: userData.parent_name,
      parent_email: userData.parent_email,
      user_id: userId,
      store_items_list: userData.store_items_list,
    }])
    .select();

  if (parentError) throw parentError;

  // Step 3: Send OTP via email
  const childOTP = await otp;
  console.log("PROMISE OTP - ", childOTP);
  await sendOTPEmail(userData.parent_email, childOTP, userData.full_name, userData.user_name);

  // Step 4: Store OTP in localStorage with expiration time
  const expirationTime = new Date().getTime() + 10 * 60 * 1000; // 10 minutes in milliseconds
  localStorage.setItem('otp', childOTP);
  localStorage.setItem('expires_at', expirationTime);


  return { userData: userDataResult, parentData: parentDataResult, success: true, message: 'OTP sent to parent email.' };
  }
  catch(err){
    console.log(err);
  }
}
