import React from "react";

// ✅ Define props interface
interface ProgressProps {
  label: string;
  value: string; // e.g. "80%"
  color: string; // Tailwind color class like "bg-[#36BC9F]"
  isDarkMode: boolean;
}

const Progress: React.FC<ProgressProps> = ({ label, value, color, isDarkMode }) => (
  <div>
    <div
      className="text-xs mb-1"
      style={{
        color: isDarkMode ? "#B5C2C9" : "#13556F",
      }}
    >
      {label}
    </div>

    <div
      className="w-full h-2 rounded"
      style={{
        backgroundColor: isDarkMode ? "#2D3133" : "#E5E7EB",
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
