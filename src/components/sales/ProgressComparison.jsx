import React from "react";
import Progress from "./Progress";

const ProgressComparison = () => (
  <div className="w-full grid grid-cols-2 gap-x-8 gap-y-4 rounded-xl p-4 sm:p-6 bg-white">
    {/* Current */}
    <div className="flex flex-col gap-5 pr-2">
      <div>
        <div className="text-xs mb-1 text-[#13556F]">Body Fat</div>
        <div className="font-bold text-base text-[#F75950]">20–25%</div>
      </div>
      <Progress label="Energy Levels" value="30%" color="bg-[#F75950]" />
      <Progress label="Physical Health" value="35%" color="bg-[#F75950]" />
      <Progress label="Metabolism Speed" value="25%" color="bg-[#F75950]" />
    </div>

    {/* After 6 Months */}
    <div className="flex flex-col gap-5 pl-2">
      <div>
        <div className="text-xs mb-1 text-[#13556F]">Body Fat</div>
        <div className="font-bold text-base text-[#36BC9F]">10–12%</div>
      </div>
      <Progress label="Energy Levels" value="85%" color="bg-[#36BC9F]" />
      <Progress label="Physical Health" value="90%" color="bg-[#36BC9F]" />
      <Progress label="Metabolism Speed" value="80%" color="bg-[#36BC9F]" />
    </div>
  </div>
);

export default ProgressComparison;
