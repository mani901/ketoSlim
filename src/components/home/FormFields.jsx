import React from 'react';

const FormFields = ({ formData, onInputChange }) => {
  return (
    <>
      {/* Gender */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gender <span className="text-red-500">*</span>
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={(e) => onInputChange('gender', e.target.value)}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={(e) => onInputChange('gender', e.target.value)}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>

      {/* Body Fat % */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Body Fat % <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-2">
          <div className="relative w-full">
            <input
              type="range"
              min="0"
              max="100"
              value={formData.bodyFat}
              onChange={(e) => onInputChange('bodyFat', e.target.value)}
              className="slider w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${formData.bodyFat}%, #000000 ${formData.bodyFat}%, #000000 100%)`
              }}
            />
          </div>
          <span className="text-sm w-8">{formData.bodyFat}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Enter your estimated body fat percentage (0-100).
        </p>
      </div>

      {/* BMI */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          BMI <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-2">
          <div className="relative w-full">
            <input
              type="range"
              min="0"
              max="40"
              value={formData.bmi}
              onChange={(e) => onInputChange('bmi', e.target.value)}
              className="slider w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${(formData.bmi/40)*100}%, #000000 ${(formData.bmi/40)*100}%, #000000 100%)`
              }}
            />
          </div>
          <span className="text-sm w-8">{formData.bmi}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Enter your Body Mass Index (0-40).
        </p>
      </div>

      {/* Daily Calorie Target */}
      <div className="mb-4">
        <label htmlFor="calorieTarget" className="block text-sm font-medium mb-1 text-[#183b49]">
          Daily Calorie Target
          <span aria-label="required" className="ml-1 text-[#f75950]">*</span>
        </label>
        <input
          id="calorieTarget"
          min="0"
          required
          placeholder="e.g. 2000"
          className="w-full rounded px-3 py-2 transition border border-gray-200 bg-white text-[#183b49] focus:outline-none focus:ring-2 focus:ring-[#183b49] focus:border-transparent"
          aria-required="true"
          type="number"
          value={formData.dailyCalorieTarget}
          onChange={(e) => onInputChange('dailyCalorieTarget', e.target.value)}
          name="calorieTarget"
        />
      </div>

      {/* Cups of Water Per Day */}
      <div className="mb-4">
        <label htmlFor="waterIntake" className="block text-sm font-medium mb-1 text-[#183b49]">
          Cups of Water Per Day
          <span aria-label="required" className="ml-1 text-[#f75950]">*</span>
        </label>
        <select
          id="waterIntake"
          name="waterIntake"
          required
          aria-required="true"
          className="w-full rounded px-3 py-2 transition-all border border-gray-200 bg-white text-[#183b49] focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none cursor-pointer"
          value={formData.cupsOfWater}
          onChange={(e) => onInputChange('cupsOfWater', e.target.value)}
        >
          <option value="">Select cups</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10+</option>
        </select>
      </div>

      {/* Weekly Weight Loss Goal */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Weekly Weight Loss Goal (lbs) <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. 1.5"
          value={formData.weeklyWeightLossGoal}
          onChange={(e) => onInputChange('weeklyWeightLossGoal', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Days to See Results */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Days to See Results <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. 30"
          value={formData.daysToSeeResults}
          onChange={(e) => onInputChange('daysToSeeResults', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </>
  );
};

export default FormFields;