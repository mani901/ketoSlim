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

    // Helper to coerce safely to number (handles strings, undefined, null)
    const toNum = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : null;
    };

    return resultsData.map((item) => {
      const updated = { ...item };

      // Update titles/highlights as before
      if (item.id === "body-fat" && (bodyFat || bodyFat === 0)) {
        updated.title = `Your Body Fat Percentage Is ${bodyFat}%`;
      }
      if (item.id === "bmi" && (bmi || bmi === 0)) {
        updated.title = `Your BMI Is ${bmi}`;
      }
      if (item.id === "calories" && dailyCalorieTarget) {
        updated.highlight = `${dailyCalorieTarget} Calories`;
      }
      if (item.id === "hydration" && cupsOfWater !== undefined && cupsOfWater !== null) {
        updated.title = `Your Body Needs ${cupsOfWater} Cups of Water Daily`;
      }
      if (item.id === "weight-rate" && weeklyWeightLossGoal) {
        updated.highlight = `${weeklyWeightLossGoal} lbs / Week`;
      }
      if (item.id === "timeline" && daysToSeeResults) {
        updated.title = `You Could See Results in as Little as ${daysToSeeResults} Days`;
      }


      // We'll compute one selectedConditionalParagraph (string) when applicable.
      if (Array.isArray(item.conditionalParagraphs) && item.conditionalParagraphs.length > 0) {
        let selected = null;

        // BODY FAT logic (gender-sensitive)
        if (item.id === "body-fat" && (bodyFat || bodyFat === 0)) {
          const bf = toNum(bodyFat);
          const g = String(gender || "").trim().toLowerCase();
          if ((g === "male" && bf < 24) || (g === "female" && bf < 31)) {
            selected = item.conditionalParagraphs[0];
          } else if (
            (g === "male" && bf >= 25 && bf <= 31) ||
            (g === "female" && bf >= 32 && bf <= 39)
          ) {
            selected = item.conditionalParagraphs[1];
          } else if ((g === "male" && bf >= 32) || (g === "female" && bf >= 40)) {
            selected = item.conditionalParagraphs[2];
          }
        }

        // BMI logic
        else if (item.id === "bmi" && (bmi || bmi === 0)) {
          const bmiVal = toNum(bmi);
         
          if (bmiVal < 26) {
            selected = item.conditionalParagraphs[0];
          } else if (bmiVal >= 30 && bmiVal <= 34.9) {
            selected = item.conditionalParagraphs[1];
          } else if (bmiVal >= 35) {
            selected = item.conditionalParagraphs[2];
          }
        }

        // CALORIES logic
        else if (item.id === "calories" && dailyCalorieTarget !== undefined && dailyCalorieTarget !== null) {
          const cal = toNum(dailyCalorieTarget);
          if (cal >= 1300 && cal <= 1500) {
            selected = item.conditionalParagraphs[0];
          } else if (cal >= 1100 && cal <= 1299) {
            selected = item.conditionalParagraphs[1];
          } else if (cal < 1100) {
            selected = item.conditionalParagraphs[2];
          }
        }

        // HYDRATION logic
        else if (item.id === "hydration" && cupsOfWater !== undefined && cupsOfWater !== null) {
          const cups = toNum(cupsOfWater);
    
          if (cups > 6) {
            selected = item.conditionalParagraphs[0];
          } else if (cups >= 3 && cups <= 6) {
            selected = item.conditionalParagraphs[1];
          } else if (cups === 2) {
            selected = item.conditionalParagraphs[2];
          } else if (cups <= 1) {
            selected = item.conditionalParagraphs[3];
          }
        }

        // If we found a selected paragraph, attach it to the result object
        if (selected) {
          updated.selectedConditionalParagraph = selected;
        }
      }

      return updated;
    });
  }, [formState]);

  const currentResult = hydratedResults[currentStep];

  const handleNext = () => {
    if (currentStep < resultsData.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      // Navigate to Sales page when on the last card
      navigate("/sales");
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  return (
    <div className="w-full max-w-xl" style={{ minHeight: "20vh", opacity: 1 }}>
      {/* Header */}
      <div className="w-full max-w-xl px-4 flex items-center justify-between pt-2 pb-2 mb-4">
        <h2 className="font-inter text-md font-semibold text-[#36BC9F]">Your Results</h2>
        <ProgressDots steps={resultsData} currentStep={currentStep} />
      </div>

      {/* Result Card */}
      <ResultCard result={currentResult} />

      {/* Navigation */}
      <NavigationButtons result={currentResult} onPrev={handlePrev} onNext={handleNext} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Result;
