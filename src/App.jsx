import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/LandingPage";
import Search from "./pages/Search";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="px-3 sm:px-11 md:px-16 lg:px-28 scroll-smooth">
       
        <div className="my-28">
           <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
