import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useAnimation from './useAnimation';
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

const App = () => {
  const headerRef = useAnimation();
  const heroRef = useAnimation();
  const benefitsRef = useAnimation();
  const collaborationRef = useAnimation();
  const pricingRef = useAnimation();
  const footerRef = useAnimation();

  return (
    <Router>
      <div className="overflow-hidden">
        <div ref={headerRef} data-animated="false">
          <Header />
        </div>
        <div ref={heroRef} data-animated="false">
          <Hero />
        </div>
        <div ref={benefitsRef} data-animated="false">
          <Benefits />
        </div>
        <div ref={collaborationRef} data-animated="false">
          <Collaboration />
        </div>
        <div ref={pricingRef} data-animated="false">
          <Pricing />
        </div>
        <div ref={footerRef} data-animated="false">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
