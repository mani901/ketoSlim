import React, { useState, useEffect } from "react";

const StickyClaimButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const pricingSection = document.getElementById("pricing-section");
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        // Show button when pricing section is not yet in view
        setIsVisible(rect.top > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPlan = (): void => {
    const planSection = document.getElementById("pricing-section");
    if (planSection) {
      planSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-lg mx-auto">
        <button
          onClick={scrollToPlan}
          className="font-bold py-3 px-8 rounded-lg flex items-center justify-center transition w-full relative pointer-events-auto shadow-lg cursor-pointer hover:shadow-xl bg-[#36BC9F] text-white"
          aria-label="Scroll to plan section"
        >
          <span className="mx-auto">Claim My Plan</span>
          <span className="absolute right-6 text-lg text-white">
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
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default StickyClaimButton;
