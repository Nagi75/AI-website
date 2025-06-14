import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      {/* Fixed Header */}
      <Header />

      {/* Main Sections */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Roadmap />
        <Footer />
      </div>

      {/* Global Button Gradient SVG */}
      <ButtonGradient />
    </>
  );
};

export default App;
