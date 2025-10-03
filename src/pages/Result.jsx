import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import resultsData from "../components/result/resultsData";
import ProgressDots from "../components/result/ProgressDots";
import ResultCard from "../components/result/ResultCard";
import NavigationButtons from "../components/result/NavigationButtons";

const Result = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();
  const formState = location.state || {};

  const hydratedResults = useMemo(() => {
    const {
      gender,
      bodyFat,
      bmi,
      dailyCalorieTarget,
      cupsOfWater,
      weeklyWeightLossGoal,
      daysToSeeResults,
    } = formState;

    return resultsData.map((item) => {
      if (item.id === "body-fat" && (bodyFat || bodyFat === 0)) {
        return {
          ...item,
          title: `Your Body Fat Percentage Is ${bodyFat}%`,
        };
      }
      if (item.id === "bmi" && (bmi || bmi === 0)) {
        return {
          ...item,
          title: `Your BMI Is ${bmi}`,
        };
      }
      if (item.id === "calories" && dailyCalorieTarget) {
        return {
          ...item,
          highlight: `${dailyCalorieTarget} Calories`,
        };
      }
      if (item.id === "hydration" && cupsOfWater) {
        return {
          ...item,
          title: `Your Body Needs ${cupsOfWater} Cups of Water Daily`,
        };
      }
      if (item.id === "weight-rate" && weeklyWeightLossGoal) {
        return {
          ...item,
          highlight: `${weeklyWeightLossGoal} lbs / Week`,
        };
      }
      if (item.id === "timeline" && daysToSeeResults) {
        return {
          ...item,
          title: `You Could See Results in as Little as ${daysToSeeResults} Days`,
        };
      }
      return item;
    });
  }, [formState]);

  const currentResult = hydratedResults[currentStep];

  const handleNext = () => {
    if (currentStep < resultsData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to Sales page when on the last card
      navigate('/sales');
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
        isDarkMode = {isDarkMode}
      />
    </div>
  );
};

export default Result;
