import React from "react";

const FeaturesList = () => {
  const features = [
    "Improving Digestion",
    "Toning Muscles",
    "Mental Wellness Reset",
    "Physical Endurance Boost",
  ];

  return (
    <div className="w-full mt-6">
      <div className="flex flex-col items-center mb-6">
        <div className="w-full flex flex-col">
          <div className="font-semibold text-base mb-2 text-[#12241F]">
            Your program will also work on:
          </div>
          <ul className="flex flex-col gap-2 items-center w-full max-w-xs">
            {features.map((item, i) => (
              <li key={i} className="flex items-center gap-2 w-full">
                <span className="text-xl rounded-full border w-7 h-7 flex items-center justify-center text-[#F75950] border-[#F75950]">
                  ✔
                </span>
                <span className="font-medium text-base text-[#12241F]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
