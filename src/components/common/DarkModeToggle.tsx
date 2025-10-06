import React from 'react';
import { useDarkMode } from '@/context/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      type="button"
      aria-pressed={isDarkMode}
      onClick={toggleDarkMode}
      className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDarkMode 
          ? 'bg-[#232627] text-white border-2 border-[#2D3133] hover:bg-[#36BC9F]' 
          : 'bg-white text-[#181A1B] border-2 border-[#e5e7eb] hover:bg-[#36BC9F]'
        }`}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;