// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-300 bg-opacity-10 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" legacyBehavior>
        <a className="font-kanit text-gray-700">Biosense</a>
      </Link>
      <div className="flex space-x-6 font-kanit font-light text-gray-700">
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
  </nav>
);

export default Navbar;
