import React from "react";

const ToolsSection = () => {
  const tools = [
    "Daily Custom Meal Plan",
    "Done-For-You Grocery Lists",
    "Overwhelm-Free Delicious Recipes",
    "Weekly Tips & Guidance",
  ];

  return (
    <>
      <h1 className="font-bold text-lg sm:text-xl text-[#12241F]">
        Get all the right tools &amp; knowledge.
      </h1>
      <div className="mt-6 flex flex-row items-center justify-between w-full">
        <div className="flex flex-col gap-4 flex-1 max-w-xs">
          {tools.map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <img alt="" className="w-8 h-8" src="/assets/placeholder.webp" />
              <span className="font-medium text-sm text-[#F75950]">{text}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-end items-center">
          <img
            alt="App preview"
            className="h-[320px] w-auto max-h-[300px] drop-shadow-2xl"
            src="/tools.webp"
          />
        </div>
      </div>
    </>
  );
};

export default ToolsSection;
