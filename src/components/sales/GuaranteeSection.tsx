import React from "react";

interface GuaranteeSectionProps {
  isDarkMode: boolean;
}

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ isDarkMode }) => {
  // Helper to conditionally set text colors
  const textColor = isDarkMode ? "#B5C2C9" : "#13556F";
  const headingColor = isDarkMode ? "#B5C2C9" : "inherit";

  return (
    <section id="guarantee-section" className="w-full flex justify-center px-2 mt-8">
      <div className="w-full max-w-xl flex flex-col gap-2">
        {/* Title + Icon */}
        <div className="flex items-center gap-4 mb-2">
          <h3
            className="text-heading-sales font-bold text-4xl sm:text-5xl flex-1"
            style={{ color: headingColor }}
          >
            Money Back Guarantee
          </h3>
          <img
            src="/60-day-guarantee.webp"
            alt="60 Day Money Back Guarantee"
            className="w-26 h-26"
          />
        </div>

        {/* Description */}
        <p className="text-base mb-1" style={{ color: textColor }}>
          We are confident with our service quality and its results. So, if you are ready to reach your goals, it’s a risk-free offer.
        </p>
        <p className="text-base mb-2" style={{ color: textColor }}>
          We guarantee you’ll see visible results or you’ll receive a full refund within 60 days after your purchase.
        </p>

        <hr className="w-12 mb-2" style={{ borderColor: textColor }} />

        {/* Terms List */}
        <ul className="text-sm flex flex-col gap-2" style={{ color: textColor }}>
          <li>
            By continuing, you represent that you are over 18 years of age and agree if for whatever reason you’re unhappy with your plan to contact customer support for a refund.
          </li>
          <li>
            You will only be charged{" "}
            <span className="font-bold text-[#F75950]">$67</span> today for your first quarter (details above)
          </li>
          <li>
            Your introductory period will last until Aug 27, 2025. You may cancel at any time before Aug 27, 2025, and you will not be charged.
          </li>
        </ul>

        {/* Notice Box */}
        <div
          className="rounded-xl text-sm p-4"
          style={{
            backgroundColor: isDarkMode ? "#181a1b" : "#F8F4F4",
            color: textColor,
          }}
        >
          <p className="mb-3">
            If you don’t cancel, KetoSlim will automatically continue your membership at the end of your introductory period and charge the membership fee of{" "}
            <span className="font-bold text-[#F75950]">$67 quarterly</span> until you cancel.
          </p>
          <p className="mb-3">
            Your subscription will be bound by our{" "}
            <a href="#" className="underline font-medium text-[#F75950]">
              Terms and Privacy Policy
            </a>.
          </p>
          <p>
            If you would like a refund for any reason call{" "}
            <a href="tel:1-800-695-5045" className="underline font-medium text-[#F75950]">
              1-800-695-5045
            </a>{" "}
            or email{" "}
            <a href="mailto:support@myketoslim.com" className="underline font-medium text-[#F75950]">
              support@myketoslim.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
