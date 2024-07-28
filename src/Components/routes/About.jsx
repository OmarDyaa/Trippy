import Navbar from "../Navbar"
import Hero from "../Hero"
import AboutImg from "../../assets/night.jpg"
import Footer from "../Footer"
import AboutUs from "../AboutUs"
function About() {
    return (
        <>
            <Navbar/>
            
            <Hero
            cName="hero-mid"
            HeroImg={AboutImg}
            title="About"
            btnClass="hide"

           />
        <AboutUs/>
            <Footer/>


        </>
    )
}

export default About
