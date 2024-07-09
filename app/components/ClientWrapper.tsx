// components/ClientWrapper.tsx
"use client";

import { useState } from 'react';
import ClientNavbar from './ClientNavbar';

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <ClientNavbar onMenuToggle={setIsMenuOpen} />
      <div className={isMenuOpen ? "blur-lg" : ""}>
        {children}
      </div>
    </div>
  );
};

export default ClientWrapper;
