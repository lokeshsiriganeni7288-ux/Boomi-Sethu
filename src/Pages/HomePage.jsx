import React from "react";
import Navbar from "../components/Navbar";
// import Footer from '../components/Footer'
import Hero from "../sections/Home/Hero";
import Location from "../components/Location";
import About from "../sections/About/About";
import Project from "../sections/Projects/Project";
import Testimonials from "../sections/Testimonials/Testimonials";
import Contact from "../sections/Contact/Contact";
import { Helmet } from "react-helmet-async";
import EnquiryModal from "../components/EnquiryModal";
const HomePage = () => {
  return (
    <div>
      <EnquiryModal />
      <Helmet>
        <title>Boomi Sethu</title>
        <meta
          name="description"
          content="Boomi Sethu is a real estate company that provides a wide range of services to its clients."
        />
        <meta
          name="keywords"
          content="Boomi Sethu, real estate, properties, apartments, villas, plots, commercial, residential, rental, sale, buy, rent, sell, purchase, investment, development, construction, engineering, architecture, design, planning, management, consultancy, services, solutions, expertise, quality, assurance, customer, satisfaction, trust, reliability, professionalism, expertise, quality, assurance, customer, satisfaction, trust, reliability, professionalism"
        />
        <meta name="author" content="Boomi Sethu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Location />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
