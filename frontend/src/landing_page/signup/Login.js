import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      handleError("Please fill out all fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { email, password },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.error("Error:", err);
      handleError(err.message || "Signup failed");
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <div className="text-center mt-5 p-5">
        <h2>Open a free demat and trading account online</h2>
        <p className="fs-4">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-7">
          <img src="media/images/signup.png" alt="signup" />
        </div>
        <div className="col-5  p-5">
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <p className="text-muted fs-5">To access your dashboard</p>
            <div className="input-group mb-3  input-group-lg">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="basic-addon2"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby="basic-addon1"
              />
            </div>
            <br />
            <button
              className="btn btn-primary btn-lg"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging you in" : "Login"}
            </button>
          </form>
          <p className="mt-3">
            By proceeding, you agree to the{" "}
            <a href="." style={{ textDecoration: "none" }}>
              Zerodha terms & privacy policy
            </a>
          </p>
          <div className="dashboard">
            <Link to={"https://zerodha-dashboard-sjhu.onrender.com/"}>
              DashBoard
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
