import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/herosection/Herosection";
import Services from "../../components/services/Services";
import "./homepage.css";

const HomePage = () => {
  return (
    <main className="home__page">
      <HeroSection />
      <Services />
      <Footer />
    </main>
  );
};

export default HomePage;
