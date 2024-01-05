import "./App.scss";
import React, { useState } from "react";
import Mainpage from "./Parent-Components/Mainpage/Mainpage.js";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar.js";

function App() {
  const defaultURL = "84e96018-4022-434e-80bf-000ce4cd12b8";

  const [currentVideoID, setCurrentVideoID] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  let { updatedVideoID } = useParams();
  if (currentVideoID == true) {
    setCurrentVideoID(updatedVideoID);
    console.log(updatedVideoID);
  }

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
