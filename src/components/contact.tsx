"use client";

import React, { FormEvent, useState } from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";
import { sendEmail } from "@/actions/sendEmail";
import { personalInfo } from "@/lib/personal-info";

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
      (event.target as HTMLFormElement).reset();
    }

    setPending(false);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="section-container mb-16 w-full max-w-[42rem] text-center sm:mb-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="-mt-4 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
        Have a project in mind or want to connect? Send me a message.
      </p>

      <form
        className="glass-card mt-8 flex w-full flex-col gap-4 p-5 text-left sm:mt-10 sm:gap-5 sm:p-7"
        onSubmit={handleSubmit}
        aria-label="Contact form"
      >
        <div>
          <label
            htmlFor="senderEmail"
            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            id="senderEmail"
            className="input-field"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label
            htmlFor="recipientEmail"
            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            To
          </label>
          <input
            id="recipientEmail"
            className="input-field cursor-not-allowed bg-gray-100/80 dark:bg-gray-800/50"
            type="text"
            value={personalInfo.email}
            readOnly
            tabIndex={-1}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            className="input-field min-h-[9rem] resize-y sm:min-h-[11rem]"
            name="message"
            placeholder="Write your message here..."
            required
            maxLength={5000}
          />
        </div>

        <div className="flex justify-center pt-1">
          <SubmitBtn pending={pending} />
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
