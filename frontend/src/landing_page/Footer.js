import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container mb-5 border-top">
        <div className="row mb-5 mt-4">
          <div className="col-3">
            <img
              src="media/images/logo.svg"
              style={{ width: "55%" }}
              className="mb-3"
            />
            <p>
              © 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <i class="fa fa-twitter footer-icon" aria-hidden="true"></i>
            <i class="fa fa-facebook-square footer-icon" aria-hidden="true"></i>
            <i class="fa fa-instagram footer-icon" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square footer-icon" aria-hidden="true"></i>
            <i class="fa fa-telegram footer-icon" aria-hidden="true"></i>
          </div>
          <div className="col-3 foot">
            <ul>
              <p className="fw-bold mb-4">Company</p>
              <a href="" className="mb-1 d-block">
                About
              </a>
              <br />
              <a href="" className="mb-1 d-block">
                Philosophy
              </a>
              <br />
              <a href="" className="mb-1 d-block">
                Press & media
              </a>
              <br />
              <a href="" className="mb-1 d-block">
                Careers
              </a>
              <br />
              <a href="" className="mb-1 d-block">
                Open source
              </a>
              <br />
            </ul>
          </div>
          <div className="col-3 foot">
            <p className="fw-bold mb-4">Support</p>
            <a href="" className="mb-1 d-block">
              Contact us
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              Support portal
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              How to file a complaint?
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              Status of your complaints
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              Bulletin
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              Circular
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              Z-Connect blog
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              Downloads
            </a>
            <br />
          </div>
          <div className="col-3 foot">
            <p className="fw-bold mb-4">Account</p>
            <a href="" className="mb-1 d-block">
              Open demat account
            </a>{" "}
            <br />
            <a href="" className="mb-1 d-block">
              Minor demat account
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              NRI demat account
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              Commodity
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              Dematerialisation
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              Fund transfer
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              MTF
            </a>
            <br />
            <a href="" className="mb-1 d-block">
              Referral program
            </a>
            <br />
          </div>
        </div>
        <div className="mt-2 text-muted text-small">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
