import "./App.scss";
import React, { useState } from "react";
import Mainpage from "./Parent-Components/Mainpage/Mainpage.js";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar.js";
import Uploadpage from "./Parent-Components/Uploadpage/Uploadpage.js";

function App() {
  const defaultURL = "84e96018-4022-434e-80bf-000ce4cd12b8";
  //"25ce5d91-a262-4dcf-bb87-42b87546bcfa" alternate

  const [currentVideoID, setCurrentVideoID] = useState(defaultURL);

  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <Routes>
          <Route
            path=""
            element={
              <Mainpage
                currentVideoID={currentVideoID}
                setCurrentVideoID={setCurrentVideoID}
              />
            }
          />
          <Route
            path="/:currentVideoID"
            element={
              <Mainpage
                currentVideoID={currentVideoID}
                setCurrentVideoID={setCurrentVideoID}
              />
            }
          />
          <Route path="/Upload" element={<Uploadpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
