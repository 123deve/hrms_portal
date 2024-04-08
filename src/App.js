import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import Leave from './component/leave/Leave';
import Navbar from './component/navbar/Navbar';
import Sidebar from './component/navbar/Sidebar';
import Profile from './component/profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Router> {/* Wrap your component hierarchy with Router */}
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={""} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/me" element={<Leave/>} />
            {/* Define other routes here */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
