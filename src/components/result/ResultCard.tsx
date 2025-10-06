import React from "react";
import { ResultDataItem } from "./resultsData";

interface ResultCardProps {
  result?: ResultDataItem;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result-card rounded-2xl shadow-xl p-4 sm:p-8 w-full max-w-xl flex flex-col items-center mb-6">
      {/* Icon */}
      <div className="flex justify-center items-center mb-2">
        <span className="text-[34px]">{result.icon}</span>
      </div>

      {/* Title */}
      <h1 className="text-heading-results text-center text-[34px] leading-[1.2em] font-semibold font-inter mb-1">
        {result.title}{" "}
        {result.highlight && (
          <span style={{ color: "var(--accent2)" }}>{result.highlight}</span>
        )}
      </h1>

      {/* Subtitle */}
      {result.subtitle && (
        <h2 className="text-heading-results text-center text-[20px] font-semibold font-inter mb-2">
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
            className="text-paragraph text-[20px] font-normal font-inter mb-2"
          >
            {text}
          </p>
        ))}

        {/* Conditional paragraph */}
        {result.selectedConditionalParagraph && (
          <p className="text-[16px] font-normal font-inter mt-2 mb-6 text-[#f75950]">
            {result.selectedConditionalParagraph}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
