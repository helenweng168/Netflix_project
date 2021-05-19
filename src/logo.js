import React from "react";
import logo from "./logo.png"; // Tell webpack this JS file uses this image
import "./logo.css";

//console.log(logo); // /logo.84287d09.png

function Logo() {
  // Import result is the URL of your image
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
