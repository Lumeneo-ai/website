import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import AllFeatures from "./components/AllFeatures";
import TrustAndTestimonials from "./components/TrustAndTestimonials";
import FutureHero from "./components/FutureHero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <div className="figma-container">
        <Navbar />
        <Hero />
        <Brands />
        <AllFeatures />
        <TrustAndTestimonials />
        <FutureHero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
