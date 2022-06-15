import React from 'react';
import OurServices from '../../OurServices/OurServices';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Speciality from '../../Speciality/Speciality';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import BlogPost from '../BlogPost/BlogPost';
import ContactUs from '../ContactUs/ContactUs';
import DentalCareDemo from '../DentalCareDemo/DentalCareDemo';
import Doctors from '../Doctors/Doctors';
import Header2 from '../Header2/Header2';
import LowerBanner from '../LowerBanner/LowerBanner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
      // Old Design 
        // <div>
        //   <Navigation></Navigation>
        //   <Banner></Banner>
        //   <LowerBanner></LowerBanner>
        //   <Services></Services>
        //   <DentalCareDemo></DentalCareDemo>
        //   <AppointmentBanner></AppointmentBanner>
        //   <Testimonial></Testimonial>
        //   <Blog></Blog>
        //   <Doctors></Doctors>
        //   <ContactUs></ContactUs>
        //   <Footer></Footer>
        // </div>
        // New Design  
        <div >
          {/* Navigation height Problem  */}
          <Header2></Header2>
          {/* <OurServices></OurServices>
          <Speciality></Speciality>
          <Doctors></Doctors> */}
          <Blog></Blog>
          <Footer></Footer>
        </div>
    );
};

export default Home;