import React from "react";

const PaymentOption = ({ title, description, isPopular, isSelected, discount }) => (
  <div className={`relative border-2 rounded-xl p-4 flex items-center justify-between cursor-pointer
      ${isPopular ? "border-[#36BC9F] bg-[#F8F4F4]" : "bg-white border-gray-200"}`}>

    <div className="flex-1 relative">
      {discount && (
        <span className="absolute -top-4 -right-16 bg-[#36BC9F] text-white font-bold text-sm px-4 py-1 rounded-bl-lg rounded-tr-lg">
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
      <div className="font-medium text-base mb-6 text-[#13556F]">{title}</div>
      {description && <div className="text-sm leading-tight text-[#13556F]">{description}</div>}
    </div>

    <span className="ml-4 flex items-center justify-center">
      <span className={`w-8 h-8 border-2 rounded-full flex items-center justify-center
        ${isSelected ? "bg-[#36BC9F] text-white" : "bg-white border-gray-200"}`}>
        {isSelected && "✔"}
      </span>
    </span>

    {isPopular && (
      <span className="absolute left-0 right-0 bottom-0 text-xs font-bold px-4 py-1 rounded-b-xl text-white bg-[#36BC9F] text-center">
        MOST POPULAR
      </span>
    )}
  </div>
);

export default PaymentOption;
