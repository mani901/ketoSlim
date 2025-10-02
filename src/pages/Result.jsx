import React, { useState } from "react";
import resultsData from "../components/result/resultsData";
import ProgressDots from "../components/result/ProgressDots";
import ResultCard from "../components/result/ResultCard";
import NavigationButtons from "../components/result/NavigationButtons";

const Result = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const currentResult = resultsData[currentStep];

  const handleNext = () => {
    if (currentStep < resultsData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-xl" style={{ minHeight: "20vh", opacity: 1 }}>
      {/* Header */}
      <div className="w-full max-w-xl px-4 flex items-center justify-between pt-2 pb-2 mb-4">
        <h2 className="font-inter text-md font-semibold text-[#36BC9F]">
          Your Results
        </h2>
        <ProgressDots steps={resultsData} currentStep={currentStep} />
      </div>

      {/* Result Card */}
      <ResultCard result={currentResult} />

      {/* Navigation */}
      <NavigationButtons
        result={currentResult}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default Result;
