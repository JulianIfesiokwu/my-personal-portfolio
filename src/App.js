import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop.component";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import { AnimatePresence } from "framer-motion";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route
            path="*"
            element={
              <SharedLayout
                setTheme={setTheme}
                changeTheme={changeTheme}
                theme={theme}
              />
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
