import React from "react";

function Team() {
  return (
    <div className="container p-5 mt-5 mb-5">
      <h3 className="text-center">People</h3>
      <div className="row mt-5">
        <div className="col-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mt-5">Nithin Kamath</h5>
          <p className="text-gray p-2 ">Founder, CEO</p>
        </div>
        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
