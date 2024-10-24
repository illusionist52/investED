'use server'

import nodemailer from "nodemailer";
import crypto from "crypto";

// Helper function to generate OTP
export const generateOTP = () => {
  return crypto.randomInt(100000, 999999);
};

// Function to send OTP email
export const sendOTPEmail = async (parentEmail, otp, childName, userName) => {
  // console.log(parentEmail, otp);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: parentEmail,
    subject: `Congratulations! ${childName} has Registered on Invested with username as ${userName}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4CAF50;">Congratulations!</h2>
        <p>
          We are excited to inform you that your child <strong>${childName}</strong> has successfully registered on our platform <strong>Invested</strong>! 🎉
        </p>
        <p>
          With Invested, you can keep track of every financial detail of your child and help them learn about finance in a fun and engaging way.
        </p>
        <h3 style="color: #4CAF50;">Your OTP for Verification</h3>
        <p>
          To complete your child's registration, please use the following OTP: <strong>${otp}</strong>.
        </p>
        <p>
          To further link your account, click the button below:
        </p>
        <a href="http://localhost:3000/verify-parent" style="display: inline-block; padding: 10px 20px; margin: 20px 0; color: #fff; background-color: #4CAF50; text-decoration: none; border-radius: 5px;">
          Verify Your Account
        </a>
        <p>
          Thank you for being a part of our community!
        </p>
        <p style="font-size: 0.9em; color: #777;">
          If you did not register on our platform, please ignore this email.
        </p>
      </div>
    `,
  };
  

  await transporter.sendMail(mailOptions);
};