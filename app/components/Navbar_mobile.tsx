// components/Navbar_mobile.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavbarMobileProps {
  onMenuToggle: (isOpen: boolean) => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onMenuToggle(newState);
  };

  const closeMenu = () => {
    setIsOpen(false);
    onMenuToggle(false);
  };

  useEffect(() => {
    onMenuToggle(isOpen);
  }, [isOpen, onMenuToggle]);

  useEffect(() => {
    // Listen for route changes and close the menu
    const handleRouteChange = () => closeMenu();
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <nav className="bg-gray-200 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="font-kanit text-gray-700" onClick={closeMenu}>Biosense</a>
        </Link>
        <button onClick={toggleMenu} className="text-gray-800 font-kanit focus:outline-none">
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-200 z-10 pt-2 pb-6">
          <div className="flex flex-col space-y-2 p-4 text-gray-600 font-light font-kanit">
            <Link href="/" legacyBehavior>
              <a className="hover:text-gray-400" onClick={closeMenu}>Home</a>
            </Link>
            <Link href="/product-technology" legacyBehavior>
              <a className="hover:text-gray-400" onClick={closeMenu}>Product/Technology</a>
            </Link>
            <Link href="/about-us" legacyBehavior>
              <a className="hover:text-gray-400" onClick={closeMenu}>About Us</a>
            </Link>
            <Link href="/community" legacyBehavior>
              <a className="hover:text-gray-400" onClick={closeMenu}>Community</a>
            </Link>
            <Link href="/support" legacyBehavior>
              <a className="hover:text-gray-400" onClick={closeMenu}>Support (Contact Us)</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
