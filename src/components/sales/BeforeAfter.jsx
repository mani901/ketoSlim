import React from "react";

const BeforeAfter = ({ isDarkMode }) => (
  <>
    <div className="relative flex flex-row justify-center items-end gap-18 mb-2 mt-4 w-full min-h-[180px]">
      {/* Background SVG Arrow */}
      <img
        alt=""
        aria-hidden="true"
        src="/transformation-arrow-f.svg"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   pointer-events-none select-none
                   w-[200px] h-[200px] object-contain
                   filter blur-[4px] brightness-0 saturate-[100%] 
                   invert-[23%] sepia-[99%]
                   hue-rotate-[353deg] contrast-[101%] 
                   opacity-90"
        style={{ zIndex: 0 }}
      />

      {/* Before Image */}
      <img
        alt="Before"
        className="rounded-lg relative z-10"
        width="170"
        height="180"
        src="/beforeTransform.webp"
      />

      {/* After Image */}
      <img
        alt="After"
        className="rounded-lg relative z-10"
        width="170"
        height="180"
        src="/afterTransform.webp"
      />
    </div>

    {/* Labels */}
    <div
      className={`flex w-full justify-between items-center mt-2 mb-4 shadow-md rounded-lg py-4 ${
        isDarkMode ? "bg-[#232627]" : "bg-white"
      }`}
    >
      <div
        className={`w-1/2 text-center font-bold ${
          isDarkMode ? "text-white" : "text-[#12241F]"
        }`}
      >
        Now
      </div>
      <div
        className={`w-1/2 text-center font-bold ${
          isDarkMode ? "text-white" : "text-[#12241F]"
        }`}
      >
        6 Months
      </div>
    </div>
  </>
);

export default BeforeAfter;
