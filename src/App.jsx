import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/projects' element={<ProjectsPage />}></Route>
            {/* <Route path='/login' element={<Login />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route> */}
          </Routes>

        </BrowserRouter>
    </div>
  )
}

export default App
