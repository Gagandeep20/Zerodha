import React from "react";

function CreateTicket() {
  const linkStyle = {
    textDecoration: "none",
    color: "#250382",
    marginBottom: "10px",
  };

  return (
    <div className="container mt-5 mb-5">
      <h3>To create a ticket, select a relevant topic</h3>
      <div className="row mt-3">
        <div className="col-4 d-flex flex-column p-5">
          <h6 className="mb-4">
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
            &nbsp;Account Opening
          </h6>

          <a href="" style={linkStyle}>
            Online Account Opening
          </a>
          <a href="" style={linkStyle}>
            Offline Account Opening
          </a>
          <a href="" style={linkStyle}>
            Company, Partnership and HUF Account Opening
          </a>
          <a href="" style={linkStyle}>
            NRI Account Opening
          </a>
          <a href="" style={linkStyle}>
            Charges at Zerodha
          </a>
          <a href="" style={linkStyle}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <a href="" style={linkStyle}>
            Getting Started
          </a>
        </div>
        <div className="col-4 d-flex flex-column p-5">
          <h6 className="mb-4">
            <i className="fa fa-user" aria-hidden="true"></i> &nbsp;Your Zerodha
            Account
          </h6>
          <a href="" style={linkStyle}>
            Login Credentials
          </a>
          <a href="" style={linkStyle}>
            Account Modification and Segment Addition
          </a>
          <a href="" style={linkStyle}>
            DP ID and bank details
          </a>
          <a href="" style={linkStyle}>
            Your Profile
          </a>
          <a href="" style={linkStyle}>
            Transfer and conversion of shares
          </a>
        </div>
        <div className="col-4 d-flex flex-column p-5">
          <h6 className="mb-4">
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
            &nbsp;Your Zerodha Account
          </h6>
          <a href="" style={linkStyle}>
            Margin/leverage, Product and Order types
          </a>
          <a href="" style={linkStyle}>
            Kite Web and Mobile
          </a>
          <a href="" style={linkStyle}>
            Trading FAQs
          </a>
          <a href="" style={linkStyle}>
            Corporate Actions
          </a>
          <a href="" style={linkStyle}>
            Sentinel
          </a>
          <a href="" style={linkStyle}>
            Kite API
          </a>
          <a href="" style={linkStyle}>
            Pi and other platforms
          </a>
          <a href="" style={linkStyle}>
            Stockreports+
          </a>
          <a href="" style={linkStyle}>
            GTT
          </a>
        </div>
      </div>
      <div className="row ">
        <div className="col-4 d-flex flex-column p-5">
          <h6 className="mb-4">
            <i className="fa fa-credit-card" aria-hidden="true"></i>
            &nbsp;Funds
          </h6>
          <a href="" style={linkStyle}>
            Adding Funds
          </a>
          <a href="" style={linkStyle}>
            Fund Withdrawal
          </a>
          <a href="" style={linkStyle}>
            eMandates
          </a>
          <a href="" style={linkStyle}>
            Adding Bank Accounts
          </a>
        </div>
        <div className="col-4 d-flex flex-column p-5">
          <h6 className="mb-4">
            <i className="fa fa-circle-o-notch" aria-hidden="true"></i>
            &nbsp;Console
          </h6>
          <a href="" style={linkStyle}>
            Reports
          </a>
          <a href="" style={linkStyle}>
            Ledger
          </a>
          <a href="" style={linkStyle}>
            Portfolio
          </a>
          <a href="" style={linkStyle}>
            60 Day Challenge
          </a>
          <a href="" style={linkStyle}>
            IPO
          </a>
          <a href="" style={linkStyle}>
            Referral Program
          </a>
        </div>
        <div className="col-4 d-flex flex-column p-5">
          <h6 className="mb-4">
            <i className="fa fa-circle-o" aria-hidden="true"></i>
            &nbsp;Coin
          </h6>
          <a href="" style={linkStyle}>
            {" "}
            Understanding Mutual Funds
          </a>
          <a href="" style={linkStyle}>
            About Coin
          </a>
          <a href="" style={linkStyle}>
            Buying and Selling through Coin
          </a>
          <a href="" style={linkStyle}>
            Starting an SIP
          </a>
          <a href="" style={linkStyle}>
            Managing your Portfolio
          </a>
          <a href="" style={linkStyle}>
            Coin App
          </a>
          <a href="" style={linkStyle}>
            Moving to Coin
          </a>
          <a href="" style={linkStyle}>
            Government Securiti
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
