import React from "react";

const Progress = ({ label, value, color }) => (
  <div>
    <div className="text-xs mb-1 text-[#13556F]">{label}</div>
    <div className="w-full h-2 rounded bg-gray-200">
      <div className={`h-2 rounded ${color}`} style={{ width: value }}></div>
    </div>
  </div>
);

export default Progress;
