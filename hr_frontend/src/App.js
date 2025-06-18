import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardPage from './component/navbar/Navbar'; 

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Router> 
          <DashboardPage/>
        </Router>
      </div>
    </div>
  );
}

export default App;
