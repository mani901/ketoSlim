import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// 1️⃣ Define the shape of the context
interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// 2️⃣ Create the context with a typed default value (undefined initially)
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

// 3️⃣ Custom hook for consuming context safely
export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

// 4️⃣ Provider component
interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Save to localStorage whenever dark mode changes
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    // Update document class for global styling
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = (): void => {
    setIsDarkMode((prev) => !prev);
  };

  const value: DarkModeContextType = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
