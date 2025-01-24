// Contact.js
"use client";
import React, { FormEvent, useState } from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    setPending(true);

    const { error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Email sent successfully!");
    }

    setPending(false);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me through this form.
      </p>

      <form
        className="mt-10 flex flex-col space-y-4 dark:text-black"
        onSubmit={handleSubmit}
      >
        {/* From Field */}
        <div className="flex items-center">
          <div className="flex-shrink-0 border-l-4 border-gray-500 bg-gray-50 dark:bg-gray-900 p-4 rounded-l-md">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              From:
            </p>
          </div>
          <input
            className="flex-grow h-14 px-4 rounded-r-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
        </div>

        {/* To Field */}
        <div className="flex items-center">
          <div className="flex-shrink-0 border-l-4 border-gray-500 bg-gray-50 dark:bg-gray-900 px-6 py-4 rounded-l-md">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              To:
            </p>
          </div>
          <input
            className="flex-grow h-14 px-4 rounded-r-lg borderBlack bg-gray-200 dark:bg-gray-700 dark:text-white/80 cursor-not-allowed"
            type="text"
            value="mhhamim11@gmail.com"
            readOnly
          />
        </div>

        {/* Message Field */}
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        {/* Submit Button */}
        <SubmitBtn pending={pending} />
      </form>
    </motion.section>
  );
};

export default Contact;
