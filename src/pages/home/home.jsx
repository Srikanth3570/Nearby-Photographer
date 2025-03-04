import React from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
    
    <section className="position-relative overflow-hidden text-center bg-light ">
      {/* Background Video */}
                <video
            autoPlay
            loop
            muted
            className=" home-container"
            style={{ objectFit: "cover", top: 0, left: 0, zIndex: 1 }}
          >
            <source src="/video/camera.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal matter">Nearby Photographer</h1>
        <p className="lead font-weight-normal paragraph">
          Find and hire photographers near you easily!
        </p>
      </div>

      {/* Buttons for Login and Signup */}
      <div className="d-flex justify-content-center mt-3">
        <a className="btn btn-primary mx-2 home-buttons-login" href="/login">
          Login
        </a>
        <a className="btn btn-success mx-2 home-buttons-signup" href="/signup">
          Sign Up
        </a>
      </div>
    </section>

    </>
  );
}

export default Home;
