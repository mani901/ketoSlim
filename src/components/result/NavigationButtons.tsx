import React from "react";
import type { ResultNav } from "@/types";

// Prev/Next controls that adapt to dark mode.
interface NavigationButtonsProps {
  result: ResultNav;
  onPrev: () => void;
  onNext: () => void;
  isDarkMode: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  result,
  onPrev,
  onNext,
  isDarkMode,
}) => {
  return (
    <div className="w-full max-w-xl px-4 mt-6 mb-8">
      <div
        className={`flex w-full gap-4 ${
          result.prevButton ? "justify-between" : "justify-end"
        }`}
      >
        {/* Previous Button */}
        {result.prevButton && (
          <button
            onClick={onPrev}
            type="button"
            className={`text-lg font-bold py-2 rounded-lg flex items-center justify-between gap-2 shadow transition hover:opacity-90 w-1/2 cursor-pointer border-2 ${
              isDarkMode
                ? "bg-[#232627] text-[#36BC9F] border-[#36BC9F]"
                : "bg-white text-[#36BC9F] border-[#36BC9F]"
            }`}
          >
            <span className="w-5 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#36BC9F]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </span>
            <span className="flex-1 text-center">{result.prevButton}</span>
            <span className="w-5 ml-2"></span>
          </button>
        )}

        {/* Next Button */}
        {result.nextButton && (
          <button
            onClick={onNext}
            type="button"
            className="text-white text-lg font-bold py-2 rounded-lg flex items-center justify-between gap-2 shadow transition hover:opacity-90 w-1/2 cursor-pointer bg-[#36BC9F] border-2 border-[#36BC9F]"
          >
            <span className="w-5 mr-2"></span>
            <span className="flex-1 text-center">{result.nextButton}</span>
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;
