import React from 'react';

const NavigationButtons = ({ result, onPrev, onNext, isDarkMode }) => {
  return (
    <div className="w-full max-w-xl px-4 mt-6 mb-8">
      <div
        className={`flex w-full gap-4 ${
          result.prevButton ? "justify-between" : "justify-end"
        }`}
      >
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
            <span style={{ width: "20px", marginRight: "8px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#36BC9F" }}
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </span>
            <span className="flex-1 text-center">{result.prevButton}</span>
            <span style={{ width: "20px", marginLeft: "8px" }}></span>
          </button>
        )}

        {result.nextButton && (
          <button
            onClick={onNext}
            type="button"
            className="text-white text-lg font-bold py-2 rounded-lg flex items-center justify-between gap-2 shadow transition hover:opacity-90 w-1/2 cursor-pointer"
            style={{
              background: "rgb(54, 188, 159)",
              borderWidth: "2px",
              borderColor: "rgb(54, 188, 159)",
              borderStyle: "solid",
            }}
          >
            <span style={{ width: "20px", marginRight: "8px" }}></span>
            <span className="flex-1 text-center">Next</span>
            <span style={{ marginRight: "8px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "white" }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;
