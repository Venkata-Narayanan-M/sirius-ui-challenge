import HeaderBanner from "./components/HeaderBanner";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Weather from "./components/Weather";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import TripForm from "./components/TripForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <section id="header">
        <HeaderBanner />
      </section>
      <section id="navbar">
        <NavBar />
      </section>
      <section id="welcome">
        <Welcome />
      </section>
      <section id="weather">
        <Weather />
      </section>
      <section id="destinations">
        <Destinations />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="trip-form">
        <TripForm />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
