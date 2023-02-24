import Header from "./components/Header/header";

import "./App.css";
import Footer from "./components/Footer/footer";
import Container from "./components/Herosection/Container";
import Frame from "./components/Herosection/Frame";
import RvkSection from "./components/Herosection/rvksection";
import EventsSection from "./components/Herosection/EventsSection";
import FeaturedSection from "./components/Herosection/FeaturedSection";

const App = () => {
  return (
    <div className="copy-with-gray-and-yellow">
      <Header />
      <img className="hero-icon" alt="" src="../hero.svg" />
      <Container />
      <Frame />
      <RvkSection />
      <EventsSection />
      <FeaturedSection />
      
      <Footer />
    </div>
  );
};

export default App;
