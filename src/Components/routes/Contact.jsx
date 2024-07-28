import Navbar from "../Navbar";
import Hero from "../Hero";
import ContactImg from "../../assets/2.jpg";
import Footer from "../Footer";
import ContactUs from "../ContactUs";
function Contact() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        HeroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Contact;
