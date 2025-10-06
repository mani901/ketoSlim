import React from "react";

const FeaturesList: React.FC = () => {
  const features: string[] = [
    "Improving Digestion",
    "Toning Muscles",
    "Mental Wellness Reset",
    "Physical Endurance Boost",
  ];

  return (
    <div className="w-full mt-6">
      <div className="flex flex-col items-center mb-6">
        <div className="w-full flex flex-col">
          <div className="text-heading-sales font-semibold text-base mb-2">
            Your program will also work on:
          </div>

          <ul className="flex flex-col gap-2 items-center w-full max-w-xs">
            {features.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-2 w-full">
                <span className="text-xl w-7 h-7 flex items-center justify-center rounded-full border border-red-500 text-red-500 bg-white">
                  ✔
                </span>
                <span className="text-heading-sales font-medium text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
