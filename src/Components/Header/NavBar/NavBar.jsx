import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import the hamburger icon

import Logo from "./Logo";
import SearchBar from "./Search";
import Links from "./NavigationLinks";
import LoginLink from "./LoginLink";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  }

  function handleCloseMenu() {
    setIsMenuOpen(false); // Close the menu
  }

  return (
    <div className="w-full h-14 px-3 py-2 flex items-center justify-between z-50 relative">
      <Logo />
      <SearchBar />
      
      {/* Mobile menu */}
      <div
        className={`absolute left-0 w-full bg-blue-500 md:bg-white ${
          isMenuOpen ? 'top-0' : '-top-60'
        } md:block md:static md:w-auto md:py-0`}
      >
        <Links handleCloseMenu={handleCloseMenu} isMenuOpen={isMenuOpen} /> {/* Pass state */}
      </div>
      <div className="flex items-center">
        <LoginLink />
        <FiMenu 
          className="text-4xl cursor-pointer md:hidden" 
          onClick={handleMenuToggle} // Toggle menu on click
        />
      </div>
    </div>
  );
}