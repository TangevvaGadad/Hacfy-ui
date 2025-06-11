"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export function Navbarlogo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [clickedOpen, setClickedOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e:any) => {
      if (e.key === "Escape") {
        setClickedOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!clickedOpen) setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (!clickedOpen) setServicesOpen(false);
  };

  const handleClick = () => {
    setClickedOpen(true);
    setServicesOpen(true);
  };

  const handleDoubleClick = () => {
    setClickedOpen(false);
    setServicesOpen(false);
  };

  const handleOutsideClick = () => {
    setClickedOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 py-2 ">
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        {/* Left Logo */}
        <a href="#">
          <Image
            src="/images/hacfy.webp"
            alt="Left Logo"
            width={100}
            height={100}
          />
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex space-x-8 items-center relative">
          <a
            href="/"
            className="text-lg font-bold text-gray-700 hover:text-red-600"
          >
            Home
          </a>
          <Link href="/about" className="text-lg font-bold text-gray-700 hover:text-red-600">
            About
          </Link>
        
          <a href="#contact" className="text-lg font-bold text-gray-700 hover:text-red-600">Contact</a>


          {/* Services Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-lg font-bold text-gray-700 hover:text-red-600"
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
            >
              Services
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/12 bg-white/90 border-2  rounded-2xl text-primary w-[1000px] px-18 py-8 z-50  shadow-lg">
                {clickedOpen && (
                  <div className="text-right ">
                    <button
                      className="text-sm text-black hover:text-gray-600 underline"
                      onClick={handleOutsideClick}
                    >
                      <X />
                    </button>
                  </div>
                )}
                <h1 className="text-4xl text-primary-yellow font-bold mb-6 text-center">
                  Our Trusted Services
                </h1>

                <div className="grid grid-cols-3 gap-8 pt-8">
                  {/* Penetration Testing */}
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary pb-2 mb-2 text-primary-yellow">
                      Penetration Testing
                    </h3>
                    <ul className="space-y-2 text-md font-medium">
                      <li className="hover:text-secondary">
                        <Link href="/knowMore/web-application-pentesting">
                          Web App
                        </Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/knowMore/network-penetration-pentesting">
                          Network
                        </Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/knowMore/mobile-application-pentesting">
                          Mobile
                        </Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/knowMore/iot-penetration-pentesting">
                          IoT
                        </Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/knowMore/cloud-application-pentesting">
                          Cloud
                        </Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/knowMore/api-penetration-pentesting">
                          API
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Cyber Resilience */}
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary pb-2 mb-2 text-primary-yellow">
                      Cyber Resilience
                    </h3>
                    <ul className="space-y-2 text-md font-medium">
                      <li  className="hover:text-secondary">
                        <Link href="/services">Cyber Advisory</Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/services">vCISO</Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/services">vDPO</Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/services">Compliance</Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/services">Risk Assessment</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Digital Forensics */}
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary pb-2 mb-2 text-primary-yellow">
                      Digital Forensics
                    </h3>
                    <ul className="space-y-2 text-md font-medium">
                      <li className="hover:text-secondary">
                        <Link href="/Forensics">Cloud</Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/Forensics">Drone</Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/Forensics">Memory</Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/Forensics">Email</Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/Forensics">IoT</Link>
                      </li>
                      <li className="hover:text-secondary">
                        <Link href="/Forensics">Database</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Close Button (only shown if clicked) */}
              </div>
            )}
          </div>

        </div>

        {/* Right Logo */}
        <Link
          href="https://cyberchetana.hacfy.com/"
          className="hidden md:block"
        >
          <Image
            src="/images/logo.webp"
            alt="Right Logo"
            width={150}
            height={100}
          />
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="relative bg-white w-64 h-full shadow-lg p-6">
            <button
              className="absolute top-4 right-4 text-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
