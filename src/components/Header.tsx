'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
            <Image 
              src="/img/logo_color.webp" 
              alt="Daylight Solar Logo" 
              width={200} 
              height={200}
              className="rounded-lg object-contain w-auto h-auto max-h-16"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition duration-200">
              Home
            </Link>
            <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition duration-200">
              About
            </Link>
            <div className="group relative px-4 py-2">
              <button className="text-gray-700 hover:text-orange-500 font-medium transition duration-200 flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="hidden group-hover:block absolute left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                <Link href="/residential" className="block px-4 py-3 hover:bg-orange-50 text-gray-700 hover:text-orange-600 font-medium transition">
                  Residential Solar
                </Link>
                <Link href="/commercial" className="block px-4 py-3 hover:bg-orange-50 text-gray-700 hover:text-orange-600 font-medium transition">
                  Commercial Solar
                </Link>
                <Link href="/solar" className="block px-4 py-3 hover:bg-orange-50 text-gray-700 hover:text-orange-600 font-medium transition">
                  Solar Batteries
                </Link>
              </div>
            </div>
            <Link href="/products" className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition duration-200">
              Products
            </Link>
            <Link href="/blog" className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition duration-200">
              Blog
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition duration-200">
              Contact
            </Link>
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/consultant" className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition duration-300">
              Free Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg font-medium transition">
                Home
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg font-medium transition">
                About
              </Link>
              
              {/* Mobile Services Dropdown */}
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg font-medium flex items-center justify-between transition"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  <Link href="/residential" className="block px-4 py-2 text-gray-700 hover:bg-orange-100 rounded-lg transition">
                    Residential Solar
                  </Link>
                  <Link href="/commercial" className="block px-4 py-2 text-gray-700 hover:bg-orange-100 rounded-lg transition">
                    Commercial Solar
                  </Link>
                  <Link href="/solar" className="block px-4 py-2 text-gray-700 hover:bg-orange-100 rounded-lg transition">
                    Solar Batteries
                  </Link>
                </div>
              )}
              
              <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg font-medium transition">
                Products
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg font-medium transition">
                Blog
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg font-medium transition">
                Contact
              </Link>
              <Link href="/consultant" className="block px-4 py-2 text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg rounded-lg font-semibold transition text-center">
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
