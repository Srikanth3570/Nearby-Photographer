import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/rigistration/signup";
import Login from "./pages/login";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function AppContent() {
  const location = useLocation(); // Get the current route
  const showHeaderFooter = location.pathname !== "/Signup" && location.pathname !== "/login";

  return (
    <>
      {showHeaderFooter && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
