"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import check from "../../public/check.svg";

export default function Form() {
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000;

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const submitWithRetry = async (formData, attempt = 0) => {
    try {
      const response = await fetch("https://formspree.io/f/movveora", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
        timeout: 10000,
      });

      if (response.ok) {
        return { success: true };
      }

      throw new Error(await response.text());
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed:`, error);

      if (attempt < MAX_RETRIES) {
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        setRetryCount(attempt + 1);
        return submitWithRetry(formData, attempt + 1);
      }

      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setRetryCount(0);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      const result = await submitWithRetry(data);

      if (result.success) {
        setStatus("success");
        e.target.reset();
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setRetryCount(0);
    }
  };

  return (
    <section className="container-nav w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-[#090812] relative mb-[-90px] w-full max-w-[90%] sm:max-w-[80%] md:max-w-[85%] mx-auto flex flex-col justify-center items-center border group rounded-3xl mt-[80px] border-white/5">
        <h4 className="text-2xl sm:text-3xl lg:text-[32px] font-bold mt-8 sm:mt-12 text-center px-4">
          👉 Send Me a Message
        </h4>
        <p className="text-white/70 w-[90%] sm:max-w-[80%] lg:max-w-[60%] text-center mx-auto text-base sm:text-lg mt-4 px-4">
          Use the contact form to share questions, feedback, or collaboration
          ideas.
        </p>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="w-full max-w-[95%] sm:max-w-[90%] px-4 sm:px-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-12 relative">
            <input
              className="bg-[#0e0d1d] w-full text-base sm:text-lg text-white/70 outline-none py-3 sm:py-4 px-4 rounded-xl"
              type="text"
              id="name"
              required
              name="name"
              placeholder="Name"
              disabled={isSubmitting}
            />
            <input
              className="bg-[#0e0d1d] w-full text-base sm:text-lg text-white/70 outline-none py-3 sm:py-4 px-4 rounded-xl"
              type="email"
              id="email"
              required
              name="email"
              placeholder="Email"
              disabled={isSubmitting}
            />
          </div>

          <textarea
            className="bg-[#0e0d1d] text-base sm:text-lg max-h-[300px] mt-4 w-full py-4 px-3 min-h-[150px] text-white/70 outline-none rounded-xl"
            id="message"
            name="message"
            required
            placeholder="Message"
            disabled={isSubmitting}
          />

          <button
            type="submit"
            value="send"
            className="font-medium text-base sm:text-lg mt-4 py-3 hover:bg-accent-700 duration-300 transition-all mb-8 sm:mb-12 cursor-pointer bg-accent-500 text-center items-center justify-center rounded-full flex mx-auto w-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? retryCount > 0
                ? `Retrying... (${retryCount}/${MAX_RETRIES})`
                : "Sending..."
              : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-[#29e56e] flex max-md:max-w-[90%] mx-auto items-center gap-1 font-bold text-center mt-3 mb-12">
            <Image className="mr-2 hidden md:block" src={check} alt="check" />
            Your message has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center mt-4 mb-8">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
