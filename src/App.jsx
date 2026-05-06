import React from "react";
import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Philosophy from "./components/About";
import VisiMisi from "./components/VisiMisi"; // Import ini
import Team from "./components/Team";
import Footer from "./components/Footer";
import Partners from "./components/Partners"; // Import ini
import Activities from "./components/Activities"; // Import ini
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="pt-5">
      <NavigationBar />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <Philosophy />
      <VisiMisi />
      <Team />
      <ProductList />
      <Partners />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
