import React, { useState, useEffect } from "react";
import PaymentOption from "./PaymentOption";

const PricingSection = () => {

  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format MM:SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full mt-10">
      <h2 className="text-center text-[22px] sm:text-2xl mb-2 text-[#13556F]">
        3 Month Custom Keto Plan
      </h2>

      {/* Countdown Banner */}
      <div className="flex items-center justify-between rounded-lg px-4 py-2 mb-4 bg-[#F75950]">
        <span className="text-white font-medium text-base">
          Discount expires in:
        </span>
        <span className="text-white font-bold text-lg flex items-center gap-1">
          {formatTime(timeLeft)} ⏱
        </span>
      </div>

      {/* Payment Options */}
      <div className="flex flex-col gap-3">
        <PaymentOption
          title="3 PAYMENTS OF $29"
          description="Just $29 today. Split the rest over 2 easy payments."
        />
        <PaymentOption
          title="1 Payment of $67. Pay in full today and save $20 instantly."
          isPopular
          isSelected
          discount="23% OFF"
        />
      </div>

      {/* Guarantee */}
      <div className="flex items-center justify-center gap-2 mt-8 mb-4 text-center">
        <span className="text-xs font-medium text-[#13556F]">
          ✅ Risk-Free: Backed by 60-Day Money-Back Guarantee
        </span>
      </div>

      {/* Continue Button */}
      <button className="font-bold py-3 px-8 rounded-lg flex items-center justify-center transition w-full relative shadow-lg cursor-pointer bg-[#36BC9F] text-white">
        <span className="mx-auto">Continue</span>
      </button>

      {/* No Thanks */}
      <div className="w-full text-center mt-2">
        <button
          type="button"
          className="underline text-base font-medium text-[#183B49]"
        >
          No Thanks, I don’t want my plan.
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
