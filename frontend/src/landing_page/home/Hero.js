import React from "react";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="homepage" className="mb-5" />
        <h1 className="mt-3">Invest in everything</h1>
        <p>
          Online platform to invest in mutual funds, derivatives, stocks and
          more
        </p>
        <button
          className="btn btn-primary fs-5 p-2"
          style={{ margin: "0 auto", width: "20%" }}
          onClick={goToSignup}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
