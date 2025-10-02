// Sales.js — no changes needed
import React, { useState } from "react";
import SalesHeader from "../components/sales/SalesHeader";
import BeforeAfter from "../components/sales/BeforeAfter";
import ProgressComparison from "../components/sales/ProgressComparison";
import FeaturesList from "../components/sales/FeaturesList";
import ToolsSection from "../components/sales/ToolsSection";
import TrustedSection from "../components/sales/TrustedSection";
import PricingSection from "../components/sales/PricingSection";
import GuaranteeSection from "../components/sales/GuaranteeSection";

const Sales = () => {
  const [selectedPlan, setSelectedPlan] = useState(false);

  return (
    <div>
      <div className="rounded-2xl shadow-xl border p-4 sm:p-8 w-full max-w-xl mx-auto flex flex-col items-center mb-6 bg-white border-gray-200">
        <SalesHeader />
        <BeforeAfter />
        <ProgressComparison />
        <FeaturesList />
        <ToolsSection />
        <TrustedSection />
        <PricingSection selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
      </div>
      <GuaranteeSection />
    </div>
  );
};

export default Sales;