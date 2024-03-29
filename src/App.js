import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { themeContext } from "./contexts/themeContext";
import { contactFormContext } from "./contexts/contactFormContext";
import PageLayout from "./components/pageLayout.component";
import AboutPage from './pages/aboutPage/AboutPage';
import HomePage from './pages/homePage/HomePage';
import ProjectsPage from './pages/projectsPage/ProjectsPage';
import ScrollToTop from "./components/ScrollToTop.component.jsx";
  
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

    if(Object.keys(data).length < 3 || data.clientEmail === '' || data.clientName === '' || data.clientMessage === '') {
      console.log('show error')      
      return
    }
    if(Object.keys(data).length > 2) {
      console.log('all completed');
      setData({});
      return
    }
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
      <contactFormContext.Provider value={{ data, setData, handleChange, handleSubmit }}>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<PageLayout />}>
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
