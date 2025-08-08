"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { BackgroundBeams } from "../ui/background-beams";

export default function Hero() {
  return (
    <div className="w-full rounded-md bg-neutral-950 relative flex flex-col justify-center antialiased py-16 md:py-28">
      <motion.div
  initial={{ opacity: 0.5, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  }}
  className="w-full max-w-7xl px-6 mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10"
>
  {/* Left Content */}
  <div className="text-white text-left flex-1 flex flex-col justify-center">
    <h1 className="text-5xl md:text-8xl font-extrabold leading-tight">
      A FUTURE <br />
      SECURED
    </h1>
    <p className="mt-4 text-lg max-w-2xl font-medium leading-8 tracking-wide">
      Our mission is to build a safer digital world by offering end-to-end
      cybersecurity solutions. Whether you're a student, professional,
      startup, or enterprise, our services are tailored to meet your needs.
      From penetration testing to comprehensive security consulting, we
      empower individuals and organizations to defend against the evolving
      cyber threat landscape.
    </p>
  </div>

  {/* Right Button */}
  <div className="flex-1 flex items-center justify-center md:justify-end">
    <Button className="px-6 py-3 text-lg border-2 text-secondary tracking-tight font-bold hover:text-white hover:bg-secondary flex items-center gap-2">
      Get a Free consultation <span>→</span>
    </Button>
  </div>
</motion.div>


      <BackgroundBeams />
    </div>
  );
}
