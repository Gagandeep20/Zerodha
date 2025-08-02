import React from "react";
function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="">
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-3 text-center p-3 border">
          <h1>
            <i class="fa fa-inr" aria-hidden="true"></i> 0
          </h1>
          <p>
            Free equity delivery and <br />
            direct mutual funds
          </p>
        </div>
        <div className="col-3 text-center p-3 border">
          <h1>
            <i class="fa fa-inr" aria-hidden="true"></i> 20
          </h1>
          <p>Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
