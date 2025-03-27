import { createContext, useState } from "react";

// 1. Create a Context
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [bgColor, setBgColor] = useState("white"); // Default color

  return (
    <ThemeContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
