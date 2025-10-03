import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const PaymentOption = ({ 
  id, 
  title, 
  isPopular,
  description, 
  discount, 
  selectedOption, 
  setSelectedOption 
}) => {
  const isSelected = selectedOption === id;
  const { isDarkMode } = useDarkMode();

  return (
    <div
  onClick={() => setSelectedOption(id)}
  className={`relative border-2 rounded-xl p-4 flex items-center justify-between cursor-pointer transition
    ${isSelected 
      ? (isDarkMode ? "border-[#36BC9F] bg-[#181a1b]" : "border-[#36BC9F] bg-white") 
      : isDarkMode 
        ? "bg-[#232627] border-gray-700" 
        : "bg-white border-gray-200"
    }`}
>
      <div className="flex-1 relative">
        {discount && (
          <span className={`absolute -top-4 -right-16 font-bold text-sm px-4 py-1 rounded-bl-lg rounded-tr-lg ${
            isSelected ? "bg-[#36BC9F] text-white" : isDarkMode ? "bg-[#181a1b] text-[#36BC9F]" : "bg-[#f8f4f4] text-[#13556f]"
          }`}>
            {discount}
          </span>
        )}
        
        {isPopular && (
          <div className="flex items-center gap-2 mb-1 mt-2">
            <span className="text-white text-xs font-bold px-2 py-1 rounded bg-[#F75950]">
              DISCOUNT
            </span>
          </div>
        )}
        
        <div className={`font-medium text-base mb-6 ${
          isDarkMode ? "text-gray-200" : "text-[#13556F]"
        }`}>
          {title}
        </div>
        
        {description && (
          <div className={`text-sm leading-tight ${
            isDarkMode ? "text-gray-300" : "text-[#13556F]"
          }`}>
            {description}
          </div>
        )}
      </div>

      {/* Circle check */}
      <span className="ml-4 flex items-center justify-center">
        <span
          className={`w-8 h-8 border-2 rounded-full flex items-center justify-center
            ${isSelected 
              ? "bg-[#36BC9F] text-white border-[#36BC9F]" 
              : isDarkMode 
                ? "bg-[#232627] border-gray-500" 
                : "bg-white border-gray-300"
            }`}
        >
          {isSelected && "✔"}
        </span>
      </span>

      {isPopular && (
        <span className={`absolute left-0 right-0 bottom-0 text-xs font-bold px-4 py-1 rounded-b-xl border-t-[1px] ${
          isDarkMode ? "border-t-gray-700" : "border-t-[#f8f4f4]"
        } text-center ${
          isSelected ? "bg-[#36BC9F] text-white" : isDarkMode ? "bg-[#232627] text-gray-200" : "bg-white text-[#13556f]"
        }`}>
          MOST POPULAR
        </span>
      )}
    </div>
  );
};

export default PaymentOption;