'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/yourprofile' },
    { icon: <FaTwitter size={24} />, url: 'https://twitter.com/yourprofile' },
    { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/yourprofile' },
    { icon: <FaYoutube size={24} />, url: 'https://www.youtube.com/yourchannel' },
  ];

  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Contact Us', url: '#contact' },
  ];

  return (
    <nav className="bg-red-500 shadow-md sticky top-0 z-50 p-3">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Side: Social Icons */}
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Right Side: Nav Links */}
        <div className="flex space-x-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-white hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="text-red-500 hover:text-blue-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-blue-600"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
