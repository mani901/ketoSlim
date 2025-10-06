import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "@/context/DarkModeContext";
import resultsData from "@/components/result/resultsData";
import type { ResultDataItem } from "@/types";
import ProgressDots from "@/components/result/ProgressDots";
import ResultCard from "@/components/result/ResultCard";
import NavigationButtons from "@/components/result/NavigationButtons";
import { useFormContext } from "@/context/FormContext";
import { hydrateResults } from "@/utils/results";

const Result: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  const { form } = useFormContext();

  // Derive content based on form context; stay stable across renders.
  const hydratedResults = useMemo<ResultDataItem[]>(() => {
    return hydrateResults(resultsData, form ?? {});
  }, [form]);

  // Guard current step to avoid undefined during initial render or out-of-range state.
  const currentResult = hydratedResults[currentStep];

  const handleNext = (): void => {
    if (currentStep < resultsData.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      navigate("/sales");
    }
  };

  const handlePrev = (): void => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  return (
    <div className="w-full max-w-xl min-h-[20vh] opacity-100">
      {!form && (
        <div className="w-full max-w-xl px-4 py-3 mb-4 rounded border border-[#e5e7eb] text-[#13556F] bg-white">
          No results yet. Please complete the form first.
        </div>
      )}
      {/* Header */}
      <div className="w-full max-w-xl px-4 flex items-center justify-between pt-2 pb-2 mb-4">
        <h2 className="font-inter text-md font-semibold text-[#36BC9F]">
          Your Results
        </h2>
        <ProgressDots steps={resultsData} currentStep={currentStep} />
      </div>

      {/* Result Card */}
      {currentResult && <ResultCard result={currentResult} />}

      {/* Navigation */}
      {currentResult && (
        <NavigationButtons
          result={currentResult}
          onPrev={handlePrev}
          onNext={handleNext}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

export default Result;
