import React, { useState } from 'react';
import FormHeader from '../components/home/FormHeader';
import FormFields from '../components/home/FormFields';
import SubmitButton from '../components/home/SubmitButton';

const Home = () => {
  const [formData, setFormData] = useState({
    gender: 'male',
    bodyFat: 0,
    bmi: 0,
    dailyCalorieTarget: '',
    cupsOfWater: '',
    weeklyWeightLossGoal: '',
    daysToSeeResults: ''
  });

  const isFormValid = () => {
    return (
      formData.gender &&
      formData.bodyFat !== null &&
      formData.bmi !== null &&
      formData.dailyCalorieTarget.trim() !== '' &&
      formData.cupsOfWater !== '' &&
      formData.weeklyWeightLossGoal.trim() !== '' &&
      formData.daysToSeeResults.trim() !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    console.log(formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#f8f4f4] p-4">
      <FormHeader />
      
      <div className="max-w-md mx-auto mt-1">
        <h1 className="mb-8 text-[34px] leading-[1.2em] font-semibold text-center tracking-[-0.5px] text-black">
          Enter Your <span className="text-red-400">Details</span>
        </h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <FormFields 
            formData={formData}
            onInputChange={handleInputChange}
          />
          <SubmitButton 
            isValid={isFormValid()} 
            onSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Home;