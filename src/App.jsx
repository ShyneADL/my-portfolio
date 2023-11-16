import React, {useState, createContext} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/projects' element={<ProjectsPage />}></Route>
            </Routes>

          </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
