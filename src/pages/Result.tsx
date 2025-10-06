import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import resultsData, { ResultDataItem } from "../components/result/resultsData";
import ProgressDots from "../components/result/ProgressDots";
import ResultCard from "../components/result/ResultCard";
import NavigationButtons from "../components/result/NavigationButtons";

interface FormState {
  gender?: string;
  bodyFat?: number;
  bmi?: number;
  dailyCalorieTarget?: number;
  cupsOfWater?: number;
  weeklyWeightLossGoal?: number;
  daysToSeeResults?: number;
}

const Result: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  const formState: FormState = (location.state as FormState) || {};

  const hydratedResults = useMemo<ResultDataItem[]>(() => {
    const {
      gender,
      bodyFat,
      bmi,
      dailyCalorieTarget,
      cupsOfWater,
      weeklyWeightLossGoal,
      daysToSeeResults,
    } = formState;

    const toNum = (v: unknown): number | null => {
      const n = Number(v);
      return Number.isFinite(n) ? n : null;
    };

    return resultsData.map((item) => {
      const updated: ResultDataItem = { ...item };

      // Title and highlight updates
      if (item.id === "body-fat" && bodyFat !== undefined) {
        updated.title = `Your Body Fat Percentage Is ${bodyFat}%`;
      }
      if (item.id === "bmi" && bmi !== undefined) {
        updated.title = `Your BMI Is ${bmi}`;
      }
      if (item.id === "calories" && dailyCalorieTarget) {
        updated.highlight = `${dailyCalorieTarget} Calories`;
      }
      if (item.id === "hydration" && cupsOfWater !== undefined) {
        updated.title = `Your Body Needs ${cupsOfWater} Cups of Water Daily`;
      }
      if (item.id === "weight-rate" && weeklyWeightLossGoal) {
        updated.highlight = `${weeklyWeightLossGoal} lbs / Week`;
      }
      if (item.id === "timeline" && daysToSeeResults) {
        updated.title = `You Could See Results in as Little as ${daysToSeeResults} Days`;
      }

      // Conditional paragraphs logic
      if (item.conditionalParagraphs && item.conditionalParagraphs.length > 0) {
        let selected: string | null = null;

        // Body fat logic
        if (item.id === "body-fat" && bodyFat !== undefined) {
          const bf = toNum(bodyFat);
          const g = (gender || "").toLowerCase();

          if ((g === "male" && bf! < 24) || (g === "female" && bf! < 31)) {
            selected = item.conditionalParagraphs[0];
          } else if (
            (g === "male" && bf! >= 25 && bf! <= 31) ||
            (g === "female" && bf! >= 32 && bf! <= 39)
          ) {
            selected = item.conditionalParagraphs[1];
          } else if ((g === "male" && bf! >= 32) || (g === "female" && bf! >= 40)) {
            selected = item.conditionalParagraphs[2];
          }
        }

        // BMI logic
        else if (item.id === "bmi" && bmi !== undefined) {
          const bmiVal = toNum(bmi);
          if (bmiVal! < 26) {
            selected = item.conditionalParagraphs[0];
          } else if (bmiVal! >= 30 && bmiVal! <= 34.9) {
            selected = item.conditionalParagraphs[1];
          } else if (bmiVal! >= 35) {
            selected = item.conditionalParagraphs[2];
          }
        }

        // Calories logic
        else if (item.id === "calories" && dailyCalorieTarget !== undefined) {
          const cal = toNum(dailyCalorieTarget);
          if (cal! >= 1300 && cal! <= 1500) {
            selected = item.conditionalParagraphs[0];
          } else if (cal! >= 1100 && cal! <= 1299) {
            selected = item.conditionalParagraphs[1];
          } else if (cal! < 1100) {
            selected = item.conditionalParagraphs[2];
          }
        }

        // Hydration logic
        else if (item.id === "hydration" && cupsOfWater !== undefined) {
          const cups = toNum(cupsOfWater);
          if (cups! > 6) {
            selected = item.conditionalParagraphs[0];
          } else if (cups! >= 3 && cups! <= 6) {
            selected = item.conditionalParagraphs[1];
          } else if (cups === 2) {
            selected = item.conditionalParagraphs[2];
          } else if (cups! <= 1) {
            selected = item.conditionalParagraphs[3];
          }
        }

        if (selected) {
          updated.selectedConditionalParagraph = selected;
        }
      }

      return updated;
    });
  }, [formState]);

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
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default Result;
