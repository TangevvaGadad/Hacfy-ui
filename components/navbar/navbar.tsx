'use client'

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = ["Home", "About", "Contact Us"]

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Logo</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold">
          {links.map((link) => (
            <li key={link} className="hover:text-blue-600 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {links.map((link) => (
              <li key={link} className="hover:text-blue-600 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
