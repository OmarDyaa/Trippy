import Hero from '../Hero';
import Navbar from '../Navbar';
import photo from "../../assets/12.jpg";
import Destination from '../Destination';
import Trip from '../Trip';
import Footer from '../../Components/Footer'
function Home() {
    return (
        <>
           <Navbar/>
            <Hero
            cName="hero"
            HeroImg={photo}
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
           />
           <Destination/>
           <Trip/>
            <Footer/>
    </>
    )
}

export default Home
