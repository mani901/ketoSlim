import React from "react";

const ToolsSection = () => {
  const tools = [
    {
      title: "Daily Custom Meal Plan",
      image: "/keto-food-1.webp",
    },
    {
      title: "Done-For-You Grocery Lists",
      image: "/keto-food-2.webp",
    },
    {
      title: "Overwhelm-Free Delicious Recipes",
      image: "/keto-food-3.webp",
    },
    {
      title: "Weekly Tips & Guidance",
      image: "/keto-food-4.webp",
    },
  ];

  return (
    <>
      <h1 className="text-heading-sales font-bold text-lg sm:text-xl">
        Get all the right tools &amp; knowledge.
      </h1>
      <div className="mt-6 flex flex-row items-center justify-between w-full">
        <div className="flex flex-col gap-4 flex-1 max-w-xs">
          {tools.map((tool, i) => (
            <div key={i} className="flex items-center gap-3">
              <img
                alt={tool.title}
                className="w-8 h-8 object-contain"
                src={tool.image}
              />
              <span className="font-medium text-sm text-[#F75950]">
                {tool.title}
              </span>
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