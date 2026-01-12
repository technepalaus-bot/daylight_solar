'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">☀</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">
              Daylight Solar
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 transition">
              About
            </Link>
            <div className="group relative">
              <button className="text-gray-700 hover:text-orange-500 transition">
                Services ▼
              </button>
              <div className="hidden group-hover:block absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg">
                <Link href="/residential" className="block px-4 py-2 hover:bg-orange-50">
                  Residential Solar
                </Link>
                <Link href="/commercial" className="block px-4 py-2 hover:bg-orange-50">
                  Commercial Solar
                </Link>
                <Link href="/solar" className="block px-4 py-2 hover:bg-orange-50">
                  Solar Batteries
                </Link>
              </div>
            </div>
            <Link href="/products" className="text-gray-700 hover:text-orange-500 transition">
              Products
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-orange-500 transition">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition">
              Contact
            </Link>
            <Link href="/consultant" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition inline-block">
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              About
            </Link>
            <Link href="/residential" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Residential Solar
            </Link>
            <Link href="/commercial" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Commercial Solar
            </Link>
            <Link href="/solar" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Solar Batteries
            </Link>
            <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Products
            </Link>
            <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              FAQ
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Contact
            </Link>
            <Link href="/consultant" className="block px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg rounded">
              Free Consultation
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
