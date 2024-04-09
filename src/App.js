import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Leave from './component/leave/Leave';
import Profile from './component/profile/Profile';
import Sidebar from './component/navbar/Sidebar';
import About from './component/profile/About';
import JobDetail from './component/profile/JobDetail'
import Assets from './component/profile/Assets';
import ProfileDetail from './component/profile/ProfileDetail'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Router> 
          <Sidebar/>
          <Routes>
            <Route path="/" element={""} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/me" element={<Leave/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/job" element={<JobDetail/>} />
            <Route path="/assets" element={<Assets/>} />
            <Route path="/profileDetail" element={<ProfileDetail/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
