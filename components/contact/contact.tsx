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
  "I want to partner with cyberProbex",
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

    const trimmedPhone = phone.trim(); // ✅ Add this

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
      setStatus(null); // ✅ Reset status after response
    } catch (error) {
      alert("Error sending message. Please try again later.");
      setStatus(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto bg-black rounded-lg shadow-md space-y-4 border-t-2 border-white p-8 "
    >
      <h1 className="text-white text-center text-4xl font-bold mb-16">Connect With HacFy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-md font-bold text-secondary pb-4">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border p-2 rounded text-white"
            required
          />
        </div>
        <div>
          <label className="block text-md font-bold border-none text-secondary pb-4">
            Work Email
          </label>
          <input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded text-white"
            required
          />
        </div>
        <div className="mt-6">
          <label className="block text-md font-bold text-secondary pb-4">
            Phone Number
          </label>
          {/* <PhoneInput
            country={"us"}
            value={phone}
            onChange={(value: any) => setPhone(value)}
            containerClass="w-full"
            inputClass="!w-full !p-2 !rounded !bg-black !text-white !border"
            buttonClass="!bg-black"
          /> */}
         <input
            type="number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded text-white"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-md  font-bold  text-secondary mt-4 mb-2">
          Types of services you need
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {servicesList.map((service) => (
            <label
              key={service}
              className="flex items-center gap-2 p-2 rounded bg-black text-white cursor-pointer"
            >
              <input
                type="checkbox"
                value={service}
                checked={checkedServices.includes(service)}
                onChange={() => handleCheckboxChange(service)}
                className="accent-secondary w-4 h-4"
              />
              <span > {service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-bold  text-secondary pb-4">
          Message
        </label>
        <textarea
          placeholder="Enter your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-2 rounded h-28 text-white"
        />
      </div>

      <button
        type="submit"
        className="bg-secondary text-white font-bold px-6 py-2 rounded shadow transition pb-2"
      >
        {status || "Send Message"}
      </button>
    </form>
  );
}
