import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import Homepage from "./components/Homepage/Homepage.component";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
