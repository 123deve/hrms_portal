// Navbar.js
import React from 'react';
//import  Logo  from '../../kekeke.png'; // Import your logo

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="flex items-center justify-between">
        <div>
        <img src={""} alt="Logo" />
        </div>

        <div className="hidden md:block">
          <input
            className="p-2 rounded-md"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="flex items-center space-x-4">
          <a href="/link-1" className="hover:underline">Link 1</a>
          <a href="/link-2" className="hover:underline">Link 2</a>
          <img src="/path-to-your-avatar.png" className="rounded-full h-10 w-10" alt="User Avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
