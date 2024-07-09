// components/Navbar_mobile.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarMobileProps {
  onMenuToggle: (isOpen: boolean) => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onMenuToggle(newState);
  };

  useEffect(() => {
    onMenuToggle(isOpen);
  }, [isOpen, onMenuToggle]);

  return (
    <nav className="bg-gray-200 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div></div> {/* Empty div to align the button to the right */}
        <button onClick={toggleMenu} className="text-gray-800 font-kanit focus:outline-none">
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-200 z-10 pt-2 pb-6">
          <div className="flex flex-col space-y-2 p-4 text-gray-600 font-light font-kanit">
            <h1 className="text-3xl text-left text-gray-900 font-light font-kanit pb-6">Biosense</h1>
            <Link href="/product-technology" legacyBehavior>
              <a className="hover:text-gray-400">Product/Technology</a>
            </Link>
            <Link href="/about-us" legacyBehavior>
              <a className="hover:text-gray-400">About Us</a>
            </Link>
            <Link href="/community" legacyBehavior>
              <a className="hover:text-gray-400">Community</a>
            </Link>
            <Link href="/support" legacyBehavior>
              <a className="hover:text-gray-400">Support (Contact Us)</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
