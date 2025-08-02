import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundColor: "rgb(128, 128, 255)",
        color: "white",
        padding: "2rem 0",
        position: "relative",
      }}
    >
      <a
        href=""
        style={{
          color: "white",
          textDecoration: "underline",
          position: "absolute",
          top: "1.5rem",
          right: "2rem",
        }}
      >
        Track Tickets
      </a>

      <div
        className="container"
        style={{
          backgroundColor: "rgb(128, 128, 255)",
          color: "white",
          width: "100vw",
        }}
      >
        <div className="row p-5">
          <div className="col-5">
            <h3>Support Portal</h3>
            <p>
              Search for an answer or browse help topics to create a ticket.
            </p>
            <form>
              <div className="input-group input-group-lg mb-5">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Eg. how do I activate F&O, why is my order getting rejected."
                />
              </div>
            </form>
          </div>

          <div className="col-2"></div>

          <div className="col-5">
            <h3>Featured</h3>
            <p>
              1.{" "}
              <a
                href=""
                style={{ color: "white", textDecoration: "underline" }}
              >
                Current Takeovers and Delisting – January 2024
              </a>
            </p>
            <p>
              2.{" "}
              <a
                href=""
                style={{ color: "white", textDecoration: "underline" }}
              >
                Latest Intraday leverages – MIS & CO
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
