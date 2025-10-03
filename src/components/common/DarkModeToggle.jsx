import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer hover:opacity-80"
      style={{
        backgroundColor: isDarkMode ? '#232627' : 'white',
        color: isDarkMode ? 'white' : '#181A1B',
        border: `2px solid ${isDarkMode ? '#2D3133' : '#e5e7eb'}`,
      }}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
