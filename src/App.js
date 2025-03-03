// import './App.css';
// // import Header from './components/header/header';
// // import Footer from "./components/footer/footer";
// // import Login from "./pages/login";
// import Signup from "./pages/rigistration/signup";

// function App() {
//   return (
//     <>
//       {/* <Header /> */}
//       <main>
//         <Signup />
//         {/* <Login /> */}
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/rigistration/signup";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

