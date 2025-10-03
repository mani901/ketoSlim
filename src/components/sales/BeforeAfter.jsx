import React from "react";

const BeforeAfter = ({ isDarkMode }) => (
  <>
    <div className="relative flex flex-row justify-center items-end gap-18 mb-2 mt-4 w-full min-h-[180px]">
      <img
        alt="Before"
        className="rounded-lg"
        width="170"
        height="180"
        src="/beforeTransform.webp"
      />
      <img
        alt="After"
        className="rounded-lg"
        width="170"
        height="180"
        src="/afterTransform.webp"
      />
    </div>

    <div
      className={`flex w-full justify-between items-center mt-2 mb-4 shadow-md rounded-lg py-4 ${
        isDarkMode ? "bg-[#232627]" : "bg-white"
      }`}
    >
      <div className={`w-1/2 text-center font-bold ${
        isDarkMode ? "text-white" : "text-[#12241F]"
      }`}>Now</div>
      <div className={`w-1/2 text-center font-bold ${
        isDarkMode ? "text-white" : "text-[#12241F]"
      }`}>6 Months</div>
    </div>
  </>
);

export default BeforeAfter;
