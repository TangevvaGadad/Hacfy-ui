"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <h2 className="text-6xl font-bold mb-14 text-center ">Get in Touch</h2>

        {/* Name Input */}
        <label className="block text-gray-300 mb-2">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="What's your name?"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 text-gray-800 border border-gray-700 rounded-lg focus:outline-none  bg-white "
          required
        />

        {/* Email Input */}
        <label className="block text-gray-300 mb-2">Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="What's your email?"
          value={formData.email}
          onChange={handleChange}
            className="w-full p-3 mb-4 text-gray-800 border border-gray-700 rounded-lg focus:outline-none  bg-white "
          required
        />

        {/* Message Input */}
        <label className="block text-gray-300 mb-2">Your Message</label>
        <textarea
          name="message"
          placeholder="What do you want to say?"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 text-gray-800 border border-gray-700 rounded-lg focus:outline-none  bg-white "
          rows={4}
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
