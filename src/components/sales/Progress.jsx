import React from "react";

const Progress = ({ label, value, color, isDarkMode }) => (
  <div>
    <div 
      className="text-xs mb-1"
      style={{ 
        color: isDarkMode ? '#B5C2C9' : '#13556F'
      }}
    >
      {label}
    </div>
    <div 
      className="w-full h-2 rounded"
      style={{ 
        backgroundColor: isDarkMode ? '#2D3133' : '#E5E7EB'
      }}
    >
      <div 
        className={`h-2 rounded ${color}`} 
        style={{ width: value }}
      />
    </div>
  </div>
);

export default Progress;