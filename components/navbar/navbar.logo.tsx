"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbarlogo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [clickedOpen, setClickedOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()


  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true)
      return
    }

    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 400
      setScrolled(window.scrollY > heroHeight - 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Escape") {
        setClickedOpen(false)
        setServicesOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleMouseEnter = () => {
    if (!clickedOpen) setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    if (!clickedOpen) setServicesOpen(false)
  }

  const handleClick = () => {
    setClickedOpen(true)
    setServicesOpen(true)
  }

  const handleDoubleClick = () => {
    setClickedOpen(false)
    setServicesOpen(false)
  }

  const handleOutsideClick = () => {
    setClickedOpen(false)
    setServicesOpen(false)
  }

  return (
    <nav
      className={`bg-white shadow-md sticky top-0 z-50 py-2 transition-all duration-300 ${
        scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        {/* Left Logo */}
        <a href="#">
          <Image src="/images/hacfy.webp" alt="Left Logo" width={100} height={100} />
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex space-x-8 items-center relative">
          <a href="/" className="text-lg font-bold text-gray-700 hover:text-red-600">
            Home
          </a>
          <Link href="/about" className="text-lg font-bold text-gray-700 hover:text-red-600">
            About
          </Link>
          <a href="#contact" className="text-lg font-bold text-gray-700 hover:text-red-600">
            Contact
          </a>

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
              <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/12 bg-white border rounded-2xl text-black w-[1100px] px-12 py-10 z-50 shadow-xl">
                {clickedOpen && (
                  <div className="text-right">
                    <button
                      className="text-sm text-black hover:text-gray-600"
                      onClick={handleOutsideClick}
                    >
                      <X />
                    </button>
                  </div>
                )}
                <div className="grid grid-cols-5 gap-6 text-left">
                  {/* DB Services */}
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">DB Services</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:underline cursor-pointer">Database Consulting</li>
                      <li className="hover:underline cursor-pointer">Virtual DBA Services</li>
                      <li className="hover:underline cursor-pointer">Database Migration Services</li>
                      <li className="hover:underline cursor-pointer">Monitoring & Support</li>
                      <li className="hover:underline cursor-pointer">Performance Tuning</li>
                    </ul>
                  </div>

                  {/* Testing / Q&A */}
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Testing / Q&A</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:underline cursor-pointer">API Testing</li>
                      <li className="hover:underline cursor-pointer">SEO Testing</li>
                      <li className="hover:underline cursor-pointer">Security Testing</li>
                      <li className="hover:underline cursor-pointer">Test Automation</li>
                      <li className="hover:underline cursor-pointer">Mobile App Testing</li>
                      <li className="hover:underline cursor-pointer">Cyber Security Testing</li>
                    </ul>
                  </div>

                  {/* More Services */}
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">More Services</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:underline cursor-pointer">Cloud Services</li>
                      <li className="hover:underline cursor-pointer">IT Services</li>
                      <li className="hover:underline cursor-pointer">Technology Solutions</li>
                      <li className="hover:underline cursor-pointer">Tech Support Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Logo */}
        <Link href="https://cyberchetana.hacfy.com/" className="hidden md:block">
          <Image src="/images/logo.webp" alt="Right Logo" width={150} height={100} />
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsSidebarOpen(false)} />
          <div className="relative bg-white w-64 h-full shadow-lg p-6">
            <button className="absolute top-4 right-4 text-gray-700" onClick={() => setIsSidebarOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
