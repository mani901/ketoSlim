import React from "react";

// ✅ No props needed here, but we still type it as a React.FC
const SalesHeader: React.FC = () => (
  <div className="flex flex-col items-center mb-4">
    <div className="flex justify-center items-center mb-2">
      <span className="text-2xl">🎯</span>
    </div>
    <h2 className="text-heading-sales text-center text-2xl sm:text-3xl font-bold mb-2">
      Your Personalized <br /> KetoSlim Plan Is Ready
    </h2>
  </div>
);

export default SalesHeader;
