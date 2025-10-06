import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

import SalesHeader from "../components/sales/SalesHeader";
import BeforeAfter from "../components/sales/BeforeAfter";
import ProgressComparison from "../components/sales/ProgressComparison";
import FeaturesList from "../components/sales/FeaturesList";
import ToolsSection from "../components/sales/ToolsSection";
import TrustedSection from "../components/sales/TrustedSection";
import PricingSection from "../components/sales/PricingSection";
import GuaranteeSection from "../components/sales/GuaranteeSection";
import StickyClaimButton from "../components/sales/StickyClaimButton";

const Sales: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div>
      {/* Sticky Claim Button */}
      <StickyClaimButton />

      <div className="pb-20">
        <div className="form-bg rounded-2xl shadow-xl p-4 sm:p-8 w-full max-w-xl mx-auto flex flex-col items-center mb-6">
          <SalesHeader />
          <BeforeAfter isDarkMode={isDarkMode} />
          <ProgressComparison isDarkMode={isDarkMode} />
          <FeaturesList />
          <ToolsSection />
          <TrustedSection isDarkMode={isDarkMode} />
          <PricingSection />
        </div>
        <GuaranteeSection isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Sales;
