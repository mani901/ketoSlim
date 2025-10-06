import React from "react";
import type { ResultDataItem } from "@/types";

// Small progress indicator for the result steps.
interface ProgressDotsProps {
  steps: ReadonlyArray<ResultDataItem>;
  currentStep: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex space-x-2">
      {steps.map((item, index) => (
        <div
          key={item.id}
          className={`w-[8px] h-[8px] rounded-full ${
            index <= currentStep ? "bg-[#36BC9F]" : "bg-[#D8D8D8]"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
