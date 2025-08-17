import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      handleError("Please fill out both fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        { email, password },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.error("Error:", err);
      handleError(err.response?.data?.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/acop-benefits.svg"
            alt="login"
            className="p-5"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6 mt-5">
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="input-group mb-3 mt-3 input-group-lg">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="basic-addon2"
              />
            </div>
            <br />
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
              {isSubmitting ? "Logging you in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
