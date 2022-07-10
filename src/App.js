import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop.component";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";

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
    </BrowserRouter>
  );
}

export default App;
