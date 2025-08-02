import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container border-bottom mb-5 text-center p-5">
      <h1>Zerodha Products</h1>
      <p>Sleek, modern, and intuitive trading platforms</p>
      <p>
        Check out{" "}
        <Link style={{ textDecoration: "none" }}>
          our investment offerings →
        </Link>
      </p>
    </div>
  );
}

export default Hero;
