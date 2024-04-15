import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import {MenuOutlined,UserOutlined,BankFilled, TeamOutlined, InfoCircleOutlined, ApartmentOutlined, SolutionOutlined, SettingOutlined } from '@ant-design/icons';
import vaibhavImage from '../../assests/images/vaibhavImage.jpeg'; // Assuming vaibhav.jpg is the image file
import routes from '../routes/routes';

const DropdownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-white focus:outline-none flex items-center">
        <div className="mr-2 md:block hidden">Vaibhav</div>
        <UserOutlined className="ml-6 block md:hidden" />
        <img src={vaibhavImage} alt="Vaibhav" className="w-10 h-10 rounded-full md:block hidden" />
      </button>
      {showMenu && (
        <div className="absolute -left-16 md:right-0 md:mt-4 mt-6 w-36 md:w-48 bg-white rounded-lg shadow-lg py-1">
          <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            <SettingOutlined className="mr-2" />
            Profile
          </Link>
          <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            <SettingOutlined className="mr-2" />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};


const DashboardPage = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };
  return (
<div className="flex h-screen">
<div className={`sidebar ${showNavMenu ? 'block' : 'hidden'} md:block w-[10%] h-screen bg-green-800 text-white justify-between md:border-r-[1px] border-gray-700 md:z-0 z-10`}>
    {/* Header with Logo */}
    <div className="logo hidden md:flex items-center justify-center h-16 border-b border-gray-700">
      <span className="hidden md:block text-xl font-bold">Ingenious</span>
    </div>

        <nav className='mt-16 md:mt-4'>
          <Link to="/home" className="py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <UserOutlined className="mr-3" />
            Home
          </Link>
          <Link to="/me" className="py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <TeamOutlined className="mr-3" />
            Me
          </Link>
          <Link to="/inbox" className="py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <InfoCircleOutlined className="mr-3" />
            Inbox
          </Link>
          <Link to="/myteam" className="py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <ApartmentOutlined className="mr-3" />
            My Team
          </Link>
          <Link to="/finances" className="py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <SolutionOutlined className="mr-3" />
            My Finances
          </Link>
          <Link to="/organisation" className="py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <BankFilled  className="mr-3" />
            Org
          </Link>
          <Link to="/setting" className="py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <SettingOutlined className="mr-3" />
            Setting
          </Link>
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden ">
        <header className="flex justify-between items-center p-4 bg-green-800 text-white fixed md:w-[89.5%] w-full h-16 z-10">
          <div className="flex items-center">
            <div className="hidden md:block text-2xl font-extrabold">Ingenious</div>
            <button onClick={toggleNavMenu}>
              <MenuOutlined className="block md:hidden mr-3" />
            </button>
          </div>
          <div className="md:w-full w-2/4 max-w-xs">
            <input type="search" placeholder="Search..." className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
          </div>
          <div>
            <DropdownMenu />
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 mt-16">
          <div className="container mx-auto px-4 sm:px-8 py-8">
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
