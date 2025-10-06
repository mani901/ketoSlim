import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "@/context/DarkModeContext";
import { useFormContext } from "@/context/FormContext";
import { FormSchema } from "@/utils/formValidation";
import type { FormState } from "@/types";
import FormFields from "@/components/home/FormFields";
import SubmitButton from "@/components/home/SubmitButton";

type DraftForm = {
  gender: FormState["gender"];
  bodyFat: number;
  bmi: number;
  dailyCalorieTarget: number | "";
  cupsOfWater: number | "";
  weeklyWeightLossGoal: number | "";
  daysToSeeResults: number | "";
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();
  const { form, setForm } = useFormContext();

  const [formData, setFormData] = useState<DraftForm>(() => {
    return (
      form ?? {
        gender: "male",
        bodyFat: 0,
        bmi: 0,
        dailyCalorieTarget: "",
        cupsOfWater: "",
        weeklyWeightLossGoal: "",
        daysToSeeResults: "",
      }
    );
  });

  // Recompute validity when any draft field changes; no navigation unless valid.
  const isFormValid = useMemo((): boolean => {
    const candidate = {
      gender: formData.gender,
      bodyFat: Number(formData.bodyFat),
      bmi: Number(formData.bmi),
      dailyCalorieTarget: Number(formData.dailyCalorieTarget),
      cupsOfWater: Number(formData.cupsOfWater),
      weeklyWeightLossGoal: Number(formData.weeklyWeightLossGoal),
      daysToSeeResults: Number(formData.daysToSeeResults),
    };
    const parsed = FormSchema.safeParse(candidate);
    return parsed.success;
  }, [formData]);

  // Validate on submit, then promote draft to global context and navigate.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const candidate = {
      gender: formData.gender,
      bodyFat: Number(formData.bodyFat),
      bmi: Number(formData.bmi),
      dailyCalorieTarget: Number(formData.dailyCalorieTarget),
      cupsOfWater: Number(formData.cupsOfWater),
      weeklyWeightLossGoal: Number(formData.weeklyWeightLossGoal),
      daysToSeeResults: Number(formData.daysToSeeResults),
    };
    const parsed = FormSchema.safeParse(candidate);
    if (!parsed.success) return;
    setForm(parsed.data as FormState);
    navigate("/results");
  };

  // Convert numeric fields at the boundary; keep empty string for controlled inputs.
  const handleInputChange = (
    field: keyof DraftForm,
    value: string | number
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: typeof prev[field] === "number" ? Number(value) : value,
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
        <SubmitButton isValid={isFormValid} />
      </form>
    </div>
  );
};

export default Home;
