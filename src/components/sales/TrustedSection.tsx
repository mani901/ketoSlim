import React from "react";

interface TrustedSectionProps {
  isDarkMode: boolean;
}

interface SourceItem {
  logo: string;
  text: string;
}

const TrustedSection: React.FC<TrustedSectionProps> = ({ isDarkMode }) => {
  const sources: SourceItem[] = [
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
      {/* Heading */}
      <h2
        className="font-bold text-3xl sm:text-4xl mb-10 text-left"
        style={{
          color: isDarkMode ? "#E0E6E9" : "#12241F",
        }}
      >
        Trusted by health &amp; nutrition professionals
      </h2>

      {/* Sources */}
      <div className="flex flex-col gap-10">
        {sources.map((item, i) => (
          <div key={i} className="flex flex-col items-start gap-2">
            {/* Logo */}
            <div className="flex justify-center items-center gap-2 mb-1 w-full">
              <img
                alt="Logo"
                className="h-10 w-auto"
                src={item.logo}
                loading="lazy"
              />
            </div>

            {/* Text */}
            <p
              className="text-base"
              style={{
                color: isDarkMode ? "#B5C2C9" : "#13556F",
              }}
            >
              {item.text}
            </p>

            {/* Source link */}
            <a
              href="#"
              className="underline text-sm mt-1"
              style={{
                color: "#F75950",
              }}
            >
              source
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;
