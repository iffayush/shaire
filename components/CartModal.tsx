'use client';

import { useEffect, useRef } from 'react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

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
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#181818]/20">
          <h2 className="text-[#181818] font-bold text-base tracking-wide">YOUR CART</h2>
          <button onClick={onClose} className="text-[#181818] hover:text-[#181818]/70">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Cart Content */}
        <div className="flex-1 p-6">
          <p className="text-[#181818] text-center font-inter font-[200]">The cart is empty</p>
        </div>
      </div>
    </div>
  );
};

export default CartModal; 