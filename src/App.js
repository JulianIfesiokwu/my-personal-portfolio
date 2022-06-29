import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import Homepage from "./components/Homepage/Homepage.component";
import ContactPage from "./components/ContactPage/ContactPage.component";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <BrowserRouter>
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
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
