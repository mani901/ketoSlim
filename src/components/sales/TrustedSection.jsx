import React from "react";

const TrustedSection = () => {
  const sources = [
    {
      logo: "/pubmed-logo-b.png",
      text: "There is evidence to suggest that a Ketogenic Diet can help with weight loss, visceral adiposity, and appetite control.",
    },
    {
      logo: "/mayo-clinic-b-ObMVoQiu.webp",
      text: "Research shows that a keto diet can result in weight loss and improvements in cardiovascular risk factors.",
    },
  ];

  return (
    <div className="w-full mt-10">
      <h2 className="font-bold text-3xl sm:text-4xl mb-10 text-left text-[#12241F]">
        Trusted by health &amp; nutrition professionals
      </h2>
      <div className="flex flex-col gap-10">
        {sources.map((item, i) => (
          <div key={i} className="flex flex-col items-start gap-2">
            <div className="flex justify-center items-center gap-2 mb-1 w-full">
              <img alt="Logo" className="h-10 w-auto" src={item.logo} />
            </div>
            <p className="text-base text-[#13556F]">{item.text}</p>
            <a href="#" className="underline text-sm mt-1 text-[#F75950]">
              source
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;
