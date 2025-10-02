import React from "react";

const ResultCard = ({ result }) => {
  return (
    <div className="rounded-2xl shadow-xl border p-4 sm:p-8 w-full max-w-xl flex flex-col items-center mb-6 bg-white border-gray-200 text-[#183B49]">
      {/* Icon */}
      <div className="flex justify-center items-center mb-2">
        <span className="text-[34px]">{result.icon}</span>
      </div>

      {/* Title */}
      <h1
        className="text-center text-[34px] leading-[1.2em] font-semibold font-inter mb-1"
        style={{ color: "rgb(24, 59, 73)" }}
      >
        {result.title}{" "}
        {result.highlight && (
          <span style={{ color: "var(--accent2)" }}>{result.highlight}</span>
        )}
      </h1>

      {/* Subtitle */}
      {result.subtitle && (
        <h2
          className="text-center text-[20px] font-semibold font-inter mb-2"
          style={{ color: "rgb(24, 59, 73)" }}
        >
          {result.subtitle}
        </h2>
      )}

      {/* Image */}
      {result.image && (
        <img
          alt={result.title}
          className="rounded-lg w-auto h-auto mb-4"
          loading="eager"
          src={result.image}
        />
      )}

      {/* Paragraphs */}
      <div className="flex flex-col items-center gap-4 mb-4">
        {result.paragraphs?.map((text, idx) => (
          <p
            key={idx}
            className="text-[20px] font-normal font-inter mb-2 text-[#13556F]"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
