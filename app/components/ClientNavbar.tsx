// components/ClientNavbar.tsx
"use client";

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from './Navbar';
import NavbarMobile from './Navbar_mobile';

interface ClientNavbarProps {
  onMenuToggle: (isOpen: boolean) => void;
}

const ClientNavbar: React.FC<ClientNavbarProps> = ({ onMenuToggle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const isClientMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsMobile(isClientMobile);
  }, [isClientMobile]);

  return (
    <>
      {isMobile ? <NavbarMobile onMenuToggle={onMenuToggle} /> : <Navbar />}
    </>
  );
};

export default ClientNavbar;
