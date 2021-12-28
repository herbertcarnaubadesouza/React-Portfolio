import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/wavesNegative.svg").default}
          alt="you have problem with the image"
        />
      </div>
    </div>
  );
}
