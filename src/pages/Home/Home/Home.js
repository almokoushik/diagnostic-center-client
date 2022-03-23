import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import DentalCareDemo from '../DentalCareDemo/DentalCareDemo';
import Doctors from '../Doctors/Doctors';
import LowerBanner from '../LowerBanner/LowerBanner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
          <Navigation></Navigation>
          <Banner></Banner>
          <LowerBanner></LowerBanner>
          <Services></Services>
          <DentalCareDemo></DentalCareDemo>
          <AppointmentBanner></AppointmentBanner>
          <Testimonial></Testimonial>
          <Blog></Blog>
          <Doctors></Doctors>
          <ContactUs></ContactUs>
          <Footer></Footer>
        </div>
    );
};

export default Home;