'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CartModal from './CartModal';
import SearchModal from './SearchModal';
import MyAccountModal from './MyAccountModal';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Assuming hero section is 100vh (full viewport height)
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled ? 'text-[#181818]' : 'text-[#FFFFF0]';
  const hoverColor = isScrolled ? 'hover:text-gray-600' : 'hover:text-gray-300';
  const bgColor = isScrolled ? 'bg-[#FFFFF0]' : 'bg-transparent';

  return (
    <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 ${bgColor}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-8 w-22 -mt-3">
            <Image
              src={isScrolled ? "/logo_alt.png" : "/logo.png"}
              alt="SHAIRE"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/featured">
                <p className={`text-sm tracking-wider ${textColor} ${hoverColor} font-inter font-[200] text-lg`}>
                  Featured
                </p>
              </Link>
              <Link href="/collection">
                <p className={`text-sm tracking-wider ${textColor} ${hoverColor} font-inter font-[200] text-lg`}>
                  Collection
                </p>
              </Link>
              <Link href="/about">
                <p className={`text-sm tracking-wider ${textColor} ${hoverColor} font-inter font-[200] text-lg`}>
                  About
                </p>
              </Link>
              <Link href="/contact">
                <p className={`text-sm tracking-wider ${textColor} ${hoverColor} font-inter font-[200] text-lg`}>
                  Contact
                </p>
              </Link>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`${textColor} ${hoverColor} transition-colors`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            </div>
            <div className="relative">
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className={`${textColor} ${hoverColor} transition-colors`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </button>
              <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </div>
            <div className="relative">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className={`${textColor} ${hoverColor} transition-colors`}
                aria-label="My Account"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 19.5a7.5 7.5 0 0 1 15 0v.75a.75.75 0 0 1-.75.75h-13.5a.75.75 0 0 1-.75-.75v-.75z" />
                </svg>
              </button>
              <MyAccountModal isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 