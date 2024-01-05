import "./App.scss";
import React, { useState } from "react";
import Mainpage from "./Parent-Components/Mainpage/Mainpage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar.js";

function App() {
  const [currentVideoID, setCurrentVideoID] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <Routes>
          <Route path="" element={<Mainpage URL={URL} />} />
          <Route path="/:videoId" element={<Mainpage URL={URL} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
