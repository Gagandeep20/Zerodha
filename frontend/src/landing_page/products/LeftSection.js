import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center gx-5">
        <div className="col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="mt-3">
            <a
              href={tryDemo}
              style={{ textDecoration: "none", color: "#0056d2" }}
            >
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href={learnMore}
              className="ms-5"
              style={{ textDecoration: "none", color: "#0056d2" }}
            >
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} className="ms-3">
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
