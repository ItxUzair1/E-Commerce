import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from '../../Context/LoginContext';
import { ImCross } from "react-icons/im"; // Import the cross icon

export default function Links({ handleCloseMenu, isMenuOpen }) {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const { isLogged } = useLogin();

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value) {
      navigate(value);
      handleCloseMenu(); // Close the menu on select change
      setSelectedValue("");
    }
  };

  return (
    <ul
      className={`flex flex-col items-center md:flex-row md:justify-evenly text-center gap-4 p-4 md:p-0 rounded-md ${
        isMenuOpen ? 'top-0' : '-top-60'
      }`}
    >
      <li className="p-2">
        <NavLink to="/" className="text-white md:text-black" onClick={handleCloseMenu}>
          Home
        </NavLink>
      </li>
      <li className="p-2">
        <select value={selectedValue} onChange={handleSelectChange} className="text-black">
          <option value="" disabled hidden>Shop</option>
          <option value="/allproducts" onClick={handleCloseMenu}>All Products</option>
        </select>
      </li>
      <li className="p-2">
        <NavLink to="/about" className="text-white md:text-black" onClick={handleCloseMenu}>
          About Us
        </NavLink>
      </li>
      <li className="p-2">
        <NavLink to="/contactus" className="text-white md:text-black" onClick={handleCloseMenu}>
          Contact Us
        </NavLink>
      </li>

      {/* Close Menu Icon */}
      <button 
        className="absolute top-4 right-4 text-white md:hidden"
        onClick={handleCloseMenu} // Call handleCloseMenu on click
      >
        <ImCross />
      </button>
    </ul>
  );
}
