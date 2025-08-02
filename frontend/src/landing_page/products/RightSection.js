import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3">
            <a
              href={learnMore}
              className="ms-0"
              style={{ textDecoration: "none", color: "#0056d2" }}
            >
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
