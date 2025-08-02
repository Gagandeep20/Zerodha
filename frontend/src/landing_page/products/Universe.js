import React from "react";

function Universe() {
  return (
    <>
      {/* Custom CSS for image sizing to ensure consistent alignment */}
      <style>
        {`
        .universe-img {
          width: 150px;   
          height: 150px;  
          object-fit: contain; 
        }
        `}
      </style>

      <div className="container text-center mt-5 p-5">
        <h2 className="fs-4 mb-3">The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row universe">
          <div className="col-4 h-100 d-flex">
            <a
              href="https://zerodhafundhouse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex flex-column h-100 align-items-center justify-content-between"
            >
              <img
                src="media/images/zerodhaFundhouse.png"
                alt="zfundhouse"
                className="universe-img"
              />
              <p className="mt-3">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </a>
          </div>
          <div className="col-4 h-100 d-flex">
            <a
              href="https://sensibull.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex flex-column h-100 align-items-center justify-content-between"
            >
              <img
                src="media/images/sensibullLogo.svg"
                alt="sensibull"
                className="universe-img"
              />
              <p className="mt-3">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </a>
          </div>
          <div className="col-4 h-100 d-flex">
            <a
              href="https://goldenpi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex flex-column align-items-center text-center w-100"
              style={{
                minHeight: "340px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <img
                src="media/images/goldenpiLogo.png"
                alt="golden"
                className="universe-img"
              />
              <p className="mt-4">Bonus trading platform</p>
            </a>
          </div>
        </div>
        <div className="row universe">
          <div className="col-4 h-100 d-flex">
            <a
              href="https://streak.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex flex-column h-100 align-items-center justify-content-between"
            >
              <img
                src="media/images/streakLogo.png"
                alt="streak"
                className="universe-img"
              />
              <p className="mt-3">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </a>
          </div>
          <div className="col-4 h-100 d-flex">
            <a
              href="https://smallcase.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex flex-column h-100 align-items-center justify-content-between"
            >
              <img
                src="media/images/smallcaseLogo.png"
                alt="smallcase"
                className="universe-img"
              />
              <p className="mt-3">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </a>
          </div>
          <div className="col-4 h-100 d-flex">
            <a
              href="https://joinditto.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex flex-column h-100 align-items-center justify-content-between"
            >
              <img
                src="media/images/dittoLogo.png"
                alt="ditto"
                className="universe-img"
                style={{ width: "35%" }} // Keep this style if the image is still too large
              />
              <p className="mt-3">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </a>
          </div>
        </div>
        <button
          className="btn btn-primary fs-5 p-2 mt-5"
          style={{ margin: "0 auto", width: "20%" }}
        >
          Signup Now
        </button>
      </div>
    </>
  );
}

export default Universe;
