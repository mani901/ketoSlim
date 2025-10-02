import React from 'react';

const ProgressDots = ({ steps, currentStep }) => {
  return (
    <div className="flex space-x-2">
      {steps.map((_, index) => (
        <div
          key={index}
          className={`w-[8px] h-[8px] rounded-full ${
            index <= currentStep ? 'bg-[#36BC9F]' : 'bg-[#D8D8D8]'
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
