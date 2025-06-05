"use client";

import { useEffect, useRef, useState } from "react";

interface MyAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyAccountModal = ({ isOpen, onClose }: MyAccountModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-[#FFFFF0] rounded-lg shadow-lg p-8 w-full max-w-lg mx-4 z-10"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#181818] hover:text-[#333]"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Content */}
        <h2 className="text-[#181818] text-lg font-normal mb-6">SIGN IN</h2>
        <p className="text-[#181818] font-bold mb-6">Sign in with your email or sign up to become an Shaire member.</p>
        <form className="mb-6">
          <label htmlFor="email" className="block text-[#181818] mb-2 font-normal">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border border-[#181818] px-4 py-3 mb-6 text-[#181818] bg-transparent rounded-none focus:outline-none focus:ring-2 focus:ring-[#181818]/20"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#181818] text-[#FFFFF0] py-4 text-lg font-normal tracking-wide uppercase mt-2 hover:bg-[#333] transition-colors"
          >
            CONTINUE
          </button>
        </form>
        <div className="flex flex-col items-center mb-2">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-[#181818] mr-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <rect x="6" y="10" width="12" height="8" rx="2" />
              <path d="M9 10V7a3 3 0 1 1 6 0v3" />
            </svg>
            <span className="text-[#181818] text-sm">All data is kept secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountModal; 