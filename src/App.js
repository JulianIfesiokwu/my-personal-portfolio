import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout.component";
import { themeContext } from "./contexts/themeContext";
import { contactFormContext } from "./contexts/contactFormContext";
import AboutPage from './pages/aboutPage/AboutPage';
import HomePage from './pages/homePage/HomePage';
import ProjectsPage from './pages/projectsPage/ProjectsPage';
import ScrollToTop from "./components/ScrollToTop.component";
// animate on scroll library
import Aos from 'aos';
import 'aos/dist/aos.css';

import "./App.css";

function App() {
  const [theme, setTheme] = useState(false);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    let newInput = {[e.target.name]: e.target.value};

    setData({...data, ...newInput});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({});
  }

  function toggleTheme() {
    setTheme(!theme);
  };

  // initiate aos library
  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  return (
    <themeContext.Provider value={{toggleTheme, theme}}>
      <contactFormContext.Provider value={{data, setData, handleChange, handleSubmit}}>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />        
          </Route>
        </Routes>
        </contactFormContext.Provider>
      </themeContext.Provider>
  );
}

export default App;
