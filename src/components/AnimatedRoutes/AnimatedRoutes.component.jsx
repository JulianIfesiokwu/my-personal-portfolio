import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "../Homepage/Homepage.component";
import AboutPage from "../AboutPage/AboutPage.component";
import ProjectsPage from "../ProjectsPage/ProjectsPage.component";
import ErrorPage from "../Error/ErrorPage.component";
import ContactPage from "../ContactPage/ContactPage.component";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AnimatedRoutes;
