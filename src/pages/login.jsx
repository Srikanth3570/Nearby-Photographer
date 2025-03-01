import React from "react";
import "./login.css"; // Import CSS
import Img from "../components/images/login.svg";

function Login() {
  return (
    <section 
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{ backgroundColor: "#748D92", margin: 0, padding: "20px" }}
    >
      <div className="login-container container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 d-none d-md-block login-image">
            <img src={Img} alt="Illustration of a phone" className="img-fluid" />
          </div>

          {/* Form Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 login-form">
            <form>
              {/* Email Input */}
              <div className="form-outline mb-3">
                <input type="email" className="form-control" placeholder="Email address" />
              </div>

              {/* Password Input */}
              <div className="form-outline mb-3">
                <input type="password" className="form-control" placeholder="Password" />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-light">Forgot password?</a>
              </div>

              {/* Sign In Button */}
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Sign in
              </button>

              {/* OR Divider */}
              <div className="divider">
                <p>OR</p>
              </div>

              {/* Sign Up Button */}
              <button type="submit" className="btn w-100" style={{ backgroundColor: "#28a745", color: "#fff" }}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
