import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-3">Open a Zerodha account</h1>
        <p>
          Modern platform and apps, <i class="fa fa-inr" aria-hidden="true"></i>
          0 investments, and flat <i class="fa fa-inr" aria-hidden="true"></i>{" "}
          20 intraday and F&O trades.
        </p>
        <button
          className="btn btn-primary fs-5 p-2"
          style={{ margin: "0 auto", width: "20%" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
