import { createContext, useContext, useState } from "react";

const ToxicContext = createContext();

export function ToxicProvider({ children }) {
  const [toxicCount, setToxicCount] = useState(0);

  const triggerToxicPattern = (pattern) => {
    alert(`You triggered: ${pattern}`);
    setToxicCount((prev) => prev + 1);
  };

  return (
    <ToxicContext.Provider value={{ toxicCount, triggerToxicPattern }}>
      {children}
    </ToxicContext.Provider>
  );
}

export function useToxicContext() {
  const context = useContext(ToxicContext);
  if (!context) {
    throw new Error("useToxicContext must be used within a ToxicProvider");
  }
  return context;
}