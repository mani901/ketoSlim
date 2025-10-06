import React from "react";
import type { FormState } from "@/types";

type DraftForm = {
  gender: FormState["gender"];
  bodyFat: number;
  bmi: number;
  dailyCalorieTarget: number | "";
  cupsOfWater: number | "";
  weeklyWeightLossGoal: number | "";
  daysToSeeResults: number | "";
};

interface FormFieldsProps {
  formData: DraftForm;
  onInputChange: (field: keyof DraftForm, value: string | number) => void;
  isDarkMode: boolean;
}

const FormFields: React.FC<FormFieldsProps> = ({
  formData,
  onInputChange,
  isDarkMode,
}) => {
  // Common label class
  const labelClass = `block text-sm mb-2 ${
    isDarkMode ? "text-white" : "text-gray-700"
  }`;

  return (
    <>
      {/* Gender */}
      <fieldset className="mb-4">
        <legend className={labelClass}>
          Gender <span className="text-red-500">*</span>
        </legend>
        <div className="flex space-x-4" role="radiogroup" aria-label="Gender">
          <label
            className={`flex items-center ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
            htmlFor="gender-male"
          >
            <input
              id="gender-male"
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={(e) => onInputChange("gender", e.target.value)}
              className="mr-2 accent-green-800"
            />
            Male
          </label>
          <label
            className={`flex items-center ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
            htmlFor="gender-female"
          >
            <input
              id="gender-female"
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={(e) => onInputChange("gender", e.target.value)}
              className="mr-2 accent-green-800"
            />
            Female
          </label>
        </div>
      </fieldset>

      {/* Body Fat % */}
      <div className="mb-4">
        <label className={labelClass}>
          Body Fat % <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-2">
          <div className="relative w-full">
            <input
              type="range"
              min="0"
              max="100"
              value={formData.bodyFat}
              onChange={(e) => onInputChange("bodyFat", Number(e.target.value))}
              className={`slider w-full h-2 rounded-lg appearance-none cursor-pointer ${
                isDarkMode ? 'bg-transparent border border-[#767676]' : ''
              }`}
              style={
                isDarkMode
                  ? {
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${formData.bodyFat}%, #0000 ${formData.bodyFat}%, #0000 100%)`,
                    }
                  : {
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${formData.bodyFat}%, #183b49 ${formData.bodyFat}%, #183b49 100%)`,
                    }
              }
            />
          </div>
          <span className={`text-sm w-8 ${isDarkMode ? "text-white" : "text-black"}`}>{formData.bodyFat}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Enter your estimated body fat percentage (0–100).
        </p>
      </div>

      {/* BMI */}
      <div className="mb-4">
        <label className={labelClass}>
          BMI <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-2">
          <div className="relative w-full">
            <input
              type="range"
              min="0"
              max="40"
              value={formData.bmi}
              onChange={(e) => onInputChange("bmi", Number(e.target.value))}
              className={`slider w-full h-2 rounded-lg appearance-none cursor-pointer ${
                isDarkMode ? 'bg-transparent border border-[#767676]' : ''
              }`}
              style={
                isDarkMode
                  ? {
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${
                        (formData.bmi / 40) * 100
                      }%, #0000 ${(formData.bmi / 40) * 100}%, #0000 100%)`,
                    }
                  : {
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${
                        (formData.bmi / 40) * 100
                      }%, #183b49 ${(formData.bmi / 40) * 100}%, #183b49 100%)`,
                    }
              }
            />
          </div>
          <span className={`text-sm w-8 ${isDarkMode ? "text-white" : "text-black"}`}>{formData.bmi}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Enter your Body Mass Index (0–40).
        </p>
      </div>

      {/* Daily Calorie Target */}
      <div className="mb-4">
         <label htmlFor="calorieTarget" className={labelClass}>
          Daily Calorie Target
          <span aria-label="required" className="ml-1 text-[#f75950]">*</span>
        </label>
<input
  id="calorieTarget"
  min="0"
  required
  placeholder="e.g. 2000"
  className={`w-full rounded px-3 py-2 transition border ${
    isDarkMode ? "text-white border-[#2d3133] focus:border-black focus:ring-white" : "border-gray-300 focus:ring-black focus:border-black"
          }  rounded-md focus:outline-none focus:ring-1 `}
  aria-required="true"
  type="number"
  value={formData.dailyCalorieTarget}
  onChange={(e) => onInputChange("dailyCalorieTarget", Number(e.target.value))}
  name="calorieTarget"
/>
</div>

      {/* Cups of Water Per Day */}
      <div className="mb-4">
        <label htmlFor="waterIntake" className={labelClass}>
          Cups of Water Per Day
          <span aria-label="required" className="ml-1 text-[#f75950]">
            *
          </span>
        </label>
        <select
          id="waterIntake"
          name="waterIntake"
          required
          aria-required="true"
      
          className={`w-full rounded px-3 py-2 transition-all border ${
            isDarkMode
              ? "bg-[#232627] border-[#2d3133] focus:ring-white focus:border-black text-white"
              : "bg-white border-gray-200 focus:ring-black text-[#183b49]"
          } focus:outline-none focus:ring-1 focus:border-transparent cursor-pointer`}
          value={formData.cupsOfWater}
          onChange={(e) => onInputChange("cupsOfWater", Number(e.target.value))}
        >
          <option value="">Select cups</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
      </div>

      {/* Weekly Weight Loss Goal */}
      <div className="mb-4">
        <label className={labelClass}>
          Weekly Weight Loss Goal (lbs){" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          step="0.1"
          min="0"
          inputMode="decimal"
          placeholder="e.g. 1.5"
          value={formData.weeklyWeightLossGoal}
          onChange={(e) =>
            onInputChange("weeklyWeightLossGoal", Number(e.target.value))
          }
          className={`w-full rounded px-3 py-2 transition border ${
    isDarkMode ? "text-white border-[#2d3133] focus:border-black focus:ring-white" : "border-gray-300 focus:ring-black focus:border-black"
          }  rounded-md focus:outline-none focus:ring-1 `}
        />
      </div>

      {/* Days to See Results */}
      <div className="mb-6">
        <label className={labelClass}>
          Days to See Results <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. 30"
          value={formData.daysToSeeResults}
          onChange={(e) => onInputChange("daysToSeeResults", Number(e.target.value))}
         className={`w-full rounded px-3 py-2 transition border ${
    isDarkMode ? "text-white border-[#2d3133] focus:border-black focus:ring-white" : "border-gray-300 focus:ring-black focus:border-black"
          }  rounded-md focus:outline-none focus:ring-1 `}
        />
      </div>
    </>
  );
};

export default FormFields;
