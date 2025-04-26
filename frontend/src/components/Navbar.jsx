import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex items-center justify-between">
      <div className="flex items-center">
      <img src="/image-removebg-preview.png" alt="Logo" className="h-12 w-12 mr-2" />
        <span className="text-2xl font-bold">Smart Doubt Solver</span>
      </div>
    </nav>
  );
};

export default Navbar;
