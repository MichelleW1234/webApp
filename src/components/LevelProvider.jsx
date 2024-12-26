import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const LevelContext = createContext();

// Create a provider component
export function RoundsProvider({ children }) {

  // Retrieve rounds from localStorage or default to 1 if not available
  const storedLevel = localStorage.getItem('level');

  const [level, setLevel] = useState();

  // Save rounds to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('level', level);
  }, [rounds]);

  return (
    <RoundsContext.Provider value={{level, setLevel}}>
      {children}
    </RoundsContext.Provider>
  );
}

// Custom hook to use the context
export function useLevel() {
  return useContext(LevelContext);
}