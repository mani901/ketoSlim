import React from "react";

//  Define props interface
interface ProgressProps {
  label: string;
  value: string; // e.g. "80%"
  color: string; // Tailwind color class like "bg-[#36BC9F]"
  isDarkMode: boolean;
}

const Progress: React.FC<ProgressProps> = ({ label, value, color, isDarkMode }) => (
  <div>
    <div
      className={`text-xs mb-1 ${isDarkMode ? 'text-[#B5C2C9]' : 'text-[#13556F]}'}`}
    >
      {label}
    </div>

    <div
      className={`w-full h-2 rounded ${isDarkMode ? 'bg-[#2D3133]' : 'bg-[#E5E7EB]'} `}
    >
      <div
        className={`h-2 rounded ${color}`}
        style={{ width: value }}
      />
    </div>
  </div>
);

export default Progress;
