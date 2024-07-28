import Navbar from "../Navbar";
import Hero from "../Hero";
import ServiceImg from "../../assets/9.jpg";
import Footer from "../Footer";
import Trip from "../Trip";
function Service() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        HeroImg={ServiceImg}
        title="Service"
        btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;
