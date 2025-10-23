import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Owner from "./components/Owner";
import Sold from "./components/Sold";
import Listing from "./components/Listing";
import Company from "./components/Company";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Owner />
      <Sold />
      <Listing />
      <Company />
      <Gallery />
      <Services />
      <Footer />
    </>
  );
}

export default App;
