import React from 'react';
import Home from "./pages/Home";
import Result from './pages/Result';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sales from './pages/Sales';
import { DarkModeProvider } from './context/DarkModeContext';
import DarkModeToggle from './components/common/DarkModeToggle';


const App = () => {
  return (
    <DarkModeProvider>
      <div className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 py-6 transition-colors duration-200"
           style={{ backgroundColor: '#f8f4f4' }}>
        <div className="dark-mode-bg min-h-screen w-full flex flex-col items-center justify-center px-2 sm:px-4 py-6">
          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* Logo Container */}
          <div className="w-full flex justify-center pt-6 pb-2 cursor-pointer logo-bg">
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
    </DarkModeProvider>
  );
};

export default App;