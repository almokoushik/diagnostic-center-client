import React from "react";
import OurServices from "../../OurServices/OurServices";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Speciality from "../../Speciality/Speciality";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import BlogPost from "../BlogPost/BlogPost";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import DentalCareDemo from "../DentalCareDemo/DentalCareDemo";
import Doctors from "../Doctors/Doctors";
import Header from "../Header/Header";
import LowerBanner from "../LowerBanner/LowerBanner";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Welcome from "../Welcome/Welcome";
import Motivation from "../Motivation/Motivation";

const Home = () => {
    return (
        <div>
            {/* Navigation height Problem  */}
            <Header></Header>
            <OurServices></OurServices>
            <Welcome></Welcome>
            <Motivation></Motivation>
            <Speciality></Speciality>
            <Doctors></Doctors>
            <Blog></Blog>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
