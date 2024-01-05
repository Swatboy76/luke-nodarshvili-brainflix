import "./App.scss";
import React, { useState } from "react";
import Mainpage from "./Parent-Components/Mainpage/Mainpage.js";

function App() {
  const [currentVideoID, setCurrentVideoID] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  return (
    <div className="App">
      <Mainpage URL={URL} />
    </div>
  );
}

export default App;
