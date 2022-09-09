import React from "react";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import MainService from "../MainService/MainService";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    return (
        <div>
            <Navigation></Navigation>
            <MainService></MainService>
            <ServiceCard></ServiceCard>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Services;
