import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="text-xl font-semibold">Smart Doubt Solver</span>
      </div>
    </nav>
  );
};

export default Navbar;
