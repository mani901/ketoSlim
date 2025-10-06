import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Result from "./pages/Result";
import Sales from "./pages/Sales";

import { DarkModeProvider } from "./context/DarkModeContext";
import DarkModeToggle from "./components/common/DarkModeToggle";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <div className="app-container min-h-screen w-full flex flex-col items-center justify-center px-2 sm:px-4 py-6 transition-colors duration-200">
        {/* Dark Mode Toggle */}
        <DarkModeToggle />

        {/* Logo Container */}
        <div className="w-full flex justify-center pt-6 pb-2 cursor-pointer">
          <img alt="Logo" className="h-10" src="/logo-ketoSlim.png" />
        </div>

        {/* Routing */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Result />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </Router>
      </div>
    </DarkModeProvider>
  );
};

export default App;
