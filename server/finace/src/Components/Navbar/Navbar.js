"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 h-16">
      <div className="mx-auto max-w-7xl h-10xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16  items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-white text-lg    font-semibold">
              Finance
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/dashboard" className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/contact" className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            
          </div>
          <div className="flex items-center">
          <Link href="/register" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Register
            </Link>
            <Link href="/login" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/Dashboard" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Dashboard
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link href="/register" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Register
            </Link>
            <Link href="/login" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
            
          </div>
          
          
          
        </div>
      )}
      
    </nav>
  );
}