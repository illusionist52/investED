export async function verifyOTP(otp) {
    try {
    // Step 1: Get OTP from the local storage.
      const storedOTP = localStorage.getItem('otp');
      const expiration = localStorage.getItem('expires_at');
  
      if (!otp) throw new Error('OTP not found.');
  
      // Check if the OTP has expired
      if (new Date(expiration) < new Date()) {
        throw new Error('OTP has expired.');
      }
  
      // Verify if the OTP matches
      if (storedOTP !== otp) {
        throw new Error('Invalid OTP.');
      }
  
      // Delete the localstorage data now -
      localStorage.removeItem('otp');
      localStorage.removeItem('expires_at');

      // OTP is valid, proceed to update parent details
      return { success: true }; // Return user_id for further updates
    } catch (e) {
      console.error('Error verifying OTP:', e);
      return { success: false, message: e.message };
    }
  }
  