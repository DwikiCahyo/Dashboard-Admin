import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import Testimonial from "../../components/Testimonial";
import Whyus from "../../components/Whyus";
import "./styles.css";

function LandingPages() {
  return (
    <>
      <Navbar />
      <main>
        <Hero hidden={false} />
        <Services />
        <Whyus />
        <Testimonial />
        <Banner />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default LandingPages;
