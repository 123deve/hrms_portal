import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
// import Leave from './component/leave/Leave';
// import Navbar from './component/navbar/Navbar';
// import Sidebar from './component/navbar/Sidebar';
// import Profile from './component/profile/Profile';
import MySunEditor from './component/suneditor/MySunEditor'
import Profile from './component/profile/Profile';

function App() {
  return (
    <div className="App">
      {/* <div className="AppGlass">
        <Router> 
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={""} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/me" element={<Leave/>} />
          </Routes>
        </Router>
      </div> */}
      <Profile/>
    </div>
  );
}

export default App;
