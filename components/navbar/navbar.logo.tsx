'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export function Navbarlogo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
       
        <a href="#">
          <Image
            src="/images/hacfy.webp"
            alt="Left Logo"
            width={100}
            height={100}
          />
        </a>

    
        <div className="hidden md:flex space-x-8">
        <a href="#about" className="text-lg font-bold text-gray-700 hover:text-red-600  ">
          Home
          </a>
          <a href="#about" className="text-lg font-bold text-gray-700 hover:text-red-600">
            About
          </a>
          <a href="#services" className="text-lg font-bold text-gray-700 hover:text-red-600">
            Services
          </a>
          <a href="#contact" className="text-lg font-bold text-gray-700 hover:text-red-600">Contact</a>
        </div>

        <Link href="https://cyberchetana.hacfy.com/" className='hidden md:block'>
          <Image
            src="/images/logo.webp"
            alt="Right Logo"
            width={150}
            height={100}
          />
        </Link>

   
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
     
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

       
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-start space-y-4 mt-12">
              
              <a href="#">
                <Image
                  src="/images/logo.webp"
                  alt="Sidebar Logo"
                  width={150}
                  height={100}
                  quality={100}
                />
              </a>

            
              <a href="#about" className="text-lg font-bold text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="#services" className="text-lg font-bold text-gray-700 hover:text-gray-900">
                Services
              </a>
              <a href="#services" className="text-lg font-bold text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
