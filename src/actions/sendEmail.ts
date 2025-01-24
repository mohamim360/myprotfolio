"use server"
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email"; // Assuming the email template is here
import React from "react";

// Initialize Resend client with the API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Function to send email
export const sendEmail = async (formData : FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Validate email and message inputs
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    // Sending email using Resend
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["mohamim360@gmail.com"], // Replace with your desired recipient
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    return { data };
  } catch (error) {
    // Return the error message in case of failure
    return { error: getErrorMessage(error) };
  }
};
