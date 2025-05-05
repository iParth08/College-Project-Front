"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-indigo-400">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          We're here to help. Reach out to us about any issue or suggestion.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Developer Info */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Image
              src="/avatars/dev.jpg"
              alt="Developer"
              width={160}
              height={160}
              className="rounded-full border shadow-lg"
            />
            <h2 className="text-xl font-semibold">Shwet Prakash</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Lead Developer of ClubConnect
            </p>
            <p className="text-sm text-muted-foreground">
              📧 contact@clubconnect.dev
            </p>
            <p className="text-sm text-muted-foreground">🌐 clubconnect.dev</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-400 text-white rounded hover:bg-indigo-600 transition"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
            {sent && (
              <p className="text-green-600 font-medium mt-2">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
