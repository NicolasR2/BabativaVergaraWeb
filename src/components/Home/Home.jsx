import Carousel from "./components/Carousel.jsx";
import FindUs from "./components/FindUs.jsx";
import OurPartners from "./components/OurPartners.jsx";
import Performance from "./components/Performance.jsx";
import Header from "../Header/Header.jsx";


import './Home.css'

function Home() {
    return(
    <div className="main-container">
        <section className="section_blue section-carousel">
            <Carousel />
        </section>
        <section className="section_white section-find_us">
            <FindUs/>
        </section>
        <section className="section_blue section-performance">
            <Performance />
        </section>
        <section className="section_white section-our_partners">
            <OurPartners />
        </section>
    </div>
    );
}

export default Home