import React from "react";
import {useContext} from 'react';
import themeContext from "../context/themeContext";

function Card() {
  const {theme} = useContext(themeContext);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      {/* Card */}
      <div className="card shadow-lg" style={{ maxWidth: "22rem", width: "100%" }}>
        
        {/* Card Image */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          className="card-img-top"
          alt="Card"
        />

        {/* Card Body */}
        <div className={`card-body p-4 ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
          {/* Card Title */}
          <h5 className="card-title">Card Title</h5>

          {/* Card Text */}
          <p className="card-text">
            This is a Bootstrap card in JSX. It has proper padding, spacing, and nested elements inside.
          </p>

          {/* Card Footer / Nested Section */}
          <div className="d-flex justify-content-between align-items-center pt-3 border-top">
            <span className="">By Ammar</span>
            <button className="btn btn-primary btn-sm">Read More</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;
