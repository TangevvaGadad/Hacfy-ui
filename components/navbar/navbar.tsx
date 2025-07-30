'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

// Define only the keys allowed in dropdownItems
type DropdownKey = 'Services' | 'Industries' | 'Who We Are' | 'Resource Center';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const socialLinks = [
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/yourprofile' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com/yourprofile' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/yourprofile' },
    { icon: <FaYoutube size={20} />, url: 'https://www.youtube.com/yourchannel' },
  ];

  const navLinks = [
    { name: 'Services', url: '#services', hasDropdown: true },
    { name: 'Pricing', url: '#pricing', hasDropdown: false },
    { name: 'Industries', url: '#industries', hasDropdown: true },
    { name: 'Who We Are', url: '#who', hasDropdown: true },
    { name: 'Resource Center', url: '#resources', hasDropdown: true },
  ];

  const dropdownItems: Record<DropdownKey, string[]> = {
    Services: ['Consulting', 'Development', 'Support'],
    Industries: ['Healthcare', 'Finance', 'Education'],
    'Who We Are': ['About Us', 'Team', 'Careers'],
    'Resource Center': ['Blog', 'Guides', 'Case Studies'],
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Social Icons - Desktop */}
        <div className="hidden md:flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
              {link.icon}
            </a>
          ))}
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => setDropdownOpen(dropdownOpen === link.name ? null : link.name)}
                className="flex items-center gap-1 text-black font-medium hover:text-blue-500 focus:outline-none"
              >
                {link.name}
                {link.hasDropdown &&
                  (dropdownOpen === link.name ? (
                    <ChevronUp size={16} color="black" />
                  ) : (
                    <ChevronDown size={16} color="black" />
                  ))}
              </button>

              {/* Dropdown Menu */}
              {link.hasDropdown &&
                dropdownOpen === link.name &&
                dropdownItems[link.name as DropdownKey]?.length > 0 && (
                  <ul className="absolute top-8 left-0 bg-white border shadow-lg rounded-md w-40 z-10">
                    {dropdownItems[link.name as DropdownKey].map((item, i) => (
                      <li key={i} className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-800">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ))}
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow-md">
          {navLinks.map((link, index) => (
            <div key={index}>
              <button
                onClick={() => setDropdownOpen(dropdownOpen === link.name ? null : link.name)}
                className="flex justify-between items-center w-full text-left text-black font-medium"
              >
                {link.name}
                {link.hasDropdown &&
                  (dropdownOpen === link.name ? (
                    <ChevronUp size={16} color="black" />
                  ) : (
                    <ChevronDown size={16} color="black" />
                  ))}
              </button>

              {/* Dropdown Items - Mobile */}
              {link.hasDropdown &&
                dropdownOpen === link.name &&
                dropdownItems[link.name as DropdownKey]?.length > 0 && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {dropdownItems[link.name as DropdownKey].map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 hover:text-blue-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ))}

          {/* Social icons in mobile menu */}
          <div className="flex justify-center space-x-4 pt-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
