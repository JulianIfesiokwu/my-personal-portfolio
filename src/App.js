import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop.component";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import Homepage from "./components/Homepage/Homepage.component";
import ContactPage from "./components/ContactPage/ContactPage.component";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage.component";
import ErrorPage from "./components/Error/ErrorPage.component";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              setTheme={setTheme}
              changeTheme={changeTheme}
              theme={theme}
            />
          }
        >
          <Route index element={<Homepage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
