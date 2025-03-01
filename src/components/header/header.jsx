import React, { useState, useEffect } from "react";
import "./header.css";
import Img from "../images/cameralogo.png";

const headerbackground={
  backgroundColor:"#212A31",
  color:"white"
}

function Header() {
  const [location, setLocation] = useState("Detecting...");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`
            );
            const data = await response.json();

            if (data.address) {
              const suburb = data.address.suburb || data.address.neighbourhood || "";
              const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.state_district ||
                "";
              const locationName = suburb ? `${suburb}, ${city}` : city;
              setLocation(locationName || "Location not found");
            } else {
              setLocation("Location not found");
            }
          } catch (error) {
            setLocation("Unable to fetch location");
          }
        },
        () => {
          setLocation("Location access denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light  fixed-top shadow-sm" style={headerbackground} >
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Left-side Logo and Location */}
        <div className="d-flex align-items-center">
          <img src={Img} alt="Logo" style={{ height: "60px", marginRight: "15px",borderRadius:"50%" }} />
          <span className="fw-bold" style={{ fontSize: "13px" }}>{location}</span>
        </div>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav" >
          <ul className="navbar-nav" >
            <li className="nav-item">
              <a className="nav-link active fs-6" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6" href="/">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6" href="/">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6" href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;


