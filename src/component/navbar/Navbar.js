import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { InboxOutlined, UserOutlined, InfoCircleOutlined, SolutionOutlined, ApartmentOutlined, FileTextOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';
import Profile from '../profile/Profile';
import Leave from '../leave/Leave';
import About from '../profile/About';
import JobDetail from '../profile/JobDetail';
import Assets from '../profile/Assets';
import ProfileDetail from '../profile/ProfileDetail';
import Documents from "../profile/Document";

const routes = [
  { path: '/profile', element: <Profile />, icon: <UserOutlined /> },
  { path: '/me', element: <Leave />, icon: <TeamOutlined /> },
  { path: '/about', element: <About />, icon: <InfoCircleOutlined /> },
  { path: '/job', element: <JobDetail />, icon: <ApartmentOutlined /> },
  { path: '/assets', element: <Assets />, icon: <SolutionOutlined /> },
  { path: '/profileDetail', element: <ProfileDetail />, icon: <UserOutlined /> },
  { path: '/documents', element: <Documents />, icon: <FileTextOutlined /> },
];

const DropdownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-white focus:outline-none">
        <UserOutlined className="text-2xl" />
      </button>
      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
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
  return (
    <div className="flex h-screen">
      <div className="sidebar w-[12%] bg-blue-800 text-white w-60 space-y-6 py-5 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <a href="#" className="text-white flex items-center space-x-2 px-4">
          <span className=" bg-black text-2xl font-extrabold">keka</span>
        </a>

        <nav className='' >
          <Link to="/home" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <UserOutlined className="mr-3" />
            Home
          </Link>
          <Link to="/me" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <TeamOutlined className="mr-3" />
            Me
          </Link>
          <Link to="/inbox" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <InfoCircleOutlined className="mr-3" />
            Inbox
          </Link>
          <Link to="/team" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <ApartmentOutlined className="mr-3" />
            My Team
          </Link>
          <Link to="/finances" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <SolutionOutlined className="mr-3" />
            My Finances
          </Link>
          <Link to="/org" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <UserOutlined className="mr-3" />
             Org
          </Link>
          <Link to="/setting" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex items-center">
            <UserOutlined className="mr-3" />
             Setting
          </Link>
        </nav>
      </div>


      <div className="flex-1 flex flex-col overflow-hidden ">
        <header className="flex justify-between items-center p-4 bg-green-800 text-white fixed w-[88%] h-16 z-10">
          <div className="flex items-center">
            <div className="text-2xl font-extrabold">keka</div>
          </div>
          <div className="w-full max-w-xs">
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
