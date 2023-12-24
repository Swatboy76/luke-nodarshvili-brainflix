import "./App.css";
import TitleBio from "./components/TitleBio-Comments/TitleBio/TitleBio.js";
import Topbar from "./components/topbar/topbar.js";
import Videobox from "./components/Videobox/Videobox.js";
import React, { useState } from "react";

function App() {
  const [currentVideoID, setCurrentVideoID] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  return (
    <div className="App">
      <Topbar />
      <Videobox currentVideoID={currentVideoID} />
      <TitleBio />
    </div>
  );
}

export default App;
