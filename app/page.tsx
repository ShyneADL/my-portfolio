"use client";
import React, { useState, createContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/index";
import ProjectsPage from "./pages/projects/page";

// Define a type for the context value
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with the defined type
export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
