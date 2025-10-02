import React, { useState } from 'react';
import Home from "./pages/Home";
import Result from './pages/Result';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sales from './pages/Sales';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#f8f4f4] dark:bg-gray-900 flex flex-col items-center justify-center px-2 sm:px-4 py-6">
        {/* Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold transition bg-white dark:bg-gray-800 text-[rgb(24,59,73)] dark:text-white border-2 border-[#e5e7eb] dark:border-gray-600 cursor-pointer hover:bg-[#36bc9f] dark:hover:bg-gray-700"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Logo Container */}
        <div className="w-full flex justify-center pt-6 pb-2 cursor-pointer bg-[#f8f4f4] dark:bg-gray-900">
          <img alt="Logo" className="h-10" src="/logo-ketoSlim.png" />
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/results" element={<Result />} />
             <Route path="/sales" element={<Sales />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;