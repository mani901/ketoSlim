import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import FormFields from "../components/home/FormFields";
import SubmitButton from "../components/home/SubmitButton";

interface FormData {
  gender: string;
  bodyFat: number;
  bmi: number;
  dailyCalorieTarget: string;
  cupsOfWater: string;
  weeklyWeightLossGoal: string;
  daysToSeeResults: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  const [formData, setFormData] = useState<FormData>({
    gender: "male",
    bodyFat: 0,
    bmi: 0,
    dailyCalorieTarget: "",
    cupsOfWater: "",
    weeklyWeightLossGoal: "",
    daysToSeeResults: "",
  });

  const isFormValid = (): boolean => {
    return (
      formData.gender !== "" &&
      formData.bodyFat !== null &&
      formData.bmi !== null &&
      formData.dailyCalorieTarget.trim() !== "" &&
      formData.cupsOfWater !== "" &&
      formData.weeklyWeightLossGoal.trim() !== "" &&
      formData.daysToSeeResults.trim() !== ""
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!isFormValid()) return;

    console.log(formData);
    navigate("/results", { state: formData });
  };

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-1">
      <h1 className="mb-8 text-[34px] leading-[1.2em] font-semibold text-center font-inter tracking-[-0.5px] text-primary">
        Enter Your <span className="text-[#f75950]">Details</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="form-bg shadow-xl rounded-2xl p-4 sm:p-8 w-full max-w-xl space-y-6"
      >
        <FormFields
          formData={formData}
          onInputChange={handleInputChange}
          isDarkMode={isDarkMode}
        />
        <SubmitButton isValid={isFormValid()} onSubmit={undefined} />
      </form>
    </div>
  );
};

export default Home;
