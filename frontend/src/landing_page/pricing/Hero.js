import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center p-5 mt-5 mb-5">
        <h1 className="fs-3">Charges</h1>
        <p style={{ color: "#9b9b9b" }} className="fs-5">
          List of all charges and taxes
        </p>
      </div>
      <div className="row text-center">
        <div className="col-4 p-4">
          <img src="media/images/pricing0.svg" style={{ width: "80%" }} />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg" style={{ width: "80%" }} />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingMF.svg" style={{ width: "80%" }} />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
