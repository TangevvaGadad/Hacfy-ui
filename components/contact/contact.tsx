"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const servicesList = [
  "Web app pentesting",
  "External Network Pentesting",
  "Mobile app pentesting",
  "IoT Pentesting",
  "API pentesting",
  "Cloud security assessment",
  "I want to partner with HacFy",
  "Others",
];

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [checkedServices, setCheckedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<string | null>(null);

  const handleCheckboxChange = (service: string) => {
    setCheckedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const trimmedPhone = phone.trim(); 

    if (!fullName.trim() || !email.trim() || !trimmedPhone) {
      alert("Please fill in all required fields.");
      setStatus(null);
      return;
    }

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone: trimmedPhone,
          message,
          services: checkedServices,
        }),
      });

      let result;
      try {
        result = await res.json();
      } catch (err) {
        alert("Something went wrong while parsing server response.");
        setStatus(null);
        return;
      }

      if (!res.ok) {
        alert(result?.message || "Failed to send email.");
      } else {
        alert(result.message);
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setCheckedServices([]);
      }
      setStatus(null); 
    } catch (error) {
      alert("Error sending message. Please try again later.");
      setStatus(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl w-full mx-auto px-4 sm:px-8 py-10 space-y-6"
    >
      <h1 className="text-secondary text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
        Connect With HacFy
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-md font-bold text-secondary pb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-600 bg-transparent p-2 rounded text-gray-600"
            required
          />
        </div>
        <div>
          <label className="block text-md font-bold text-secondary pb-2">
            Work Email
          </label>
          <input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-600 bg-transparent p-2 rounded text-gray-600"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-md font-bold text-secondary pb-2">
            Phone Number
          </label>
          <input
            type="number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-600 bg-transparent p-2 rounded text-gray-600"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-md font-bold text-secondary mb-2">
          Types of services you need
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {servicesList.map((service) => (
            <label key={service} className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                value={service}
                checked={checkedServices.includes(service)}
                onChange={() => handleCheckboxChange(service)}
                className="accent-secondary w-4 h-4"
              />
              <span className="text-sm font-medium">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-bold text-secondary pb-2">
          Message
        </label>
        <textarea
          placeholder="Enter your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-600 bg-transparent p-2 rounded h-28 text-gray-600"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-secondary hover:bg-opacity-90 transition text-white font-bold px-8 py-2 rounded w-full sm:w-auto"
        >
          {status || "Send Message"}
        </button>
      </div>
    </form>
  );
}
