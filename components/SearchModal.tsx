'use client';

import { useEffect, useRef, useState } from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularSearches = [
  'TOPS LADIES',
  'SHIRTS MEN',
  'T-SHIRTS KIDS',
];

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      inputRef.current?.focus();
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`absolute right-0 top-0 h-full w-full max-w-lg bg-[#FFFFF0] shadow-2xl transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Search Bar */}
        <div className="flex items-center px-6 py-6 border-b border-[#181818]/20">
          <svg className="w-5 h-5 text-[#181818]/60 mr-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <form onSubmit={handleSearch} className="flex-1">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-transparent border-none outline-none text-[#181818] placeholder-[#181818]/50 font-inter font-[200] text-lg"
            />
          </form>
          <button onClick={onClose} className="ml-4 text-[#181818] hover:text-[#181818]/70">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Popular Searches */}
        <div className="px-8 py-8">
          <div className="mb-4 text-[#181818] font-bold text-base tracking-wide">POPULAR SEARCHES</div>
          <ul className="space-y-3">
            {popularSearches.map((item) => (
              <li key={item} className="text-[#181818] font-inter font-[200] text-base cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchModal; 