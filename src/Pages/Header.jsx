import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Rental
        </div>
        
        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>

          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>

        </nav>
        
        {/* User Profile Section */}
        <div className="flex items-center space-x-4">
        <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
        <Link to="/signup" className="text-gray-600 hover:text-blue-600">Sign Up</Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
