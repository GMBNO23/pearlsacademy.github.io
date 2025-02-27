"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="Pearl's Kids Academy Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Pearl's Kids Academy
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
              About
            </Link>
            <Link href="/programs" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
              Programs
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
              Contact
            </Link>
            <Link href="/apply">
              <Button className="bg-purple-600 hover:bg-blue-500">
                Enroll Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-purple-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/programs" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link href="/apply">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-3">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;