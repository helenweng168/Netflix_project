import React from "react";
import Logo from "./logo.js";
import "./App.css";

import FetchingData from "./List.js";

function App() {
  return (
    <div>
      <div className="logo">
        <Logo />
      </div>
      <div className="list">
        <FetchingData />
      </div>
    </div>
  );
}

export default App;
