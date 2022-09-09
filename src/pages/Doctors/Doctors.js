import React from "react";
import Blog from "../Home/Blog/Blog";
import ContactUs from "../Shared/ContactUs/ContactUs";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import DoctorsDetail from "./DoctorsDetail/DoctorsDetail";
import DoctorsQuote from "./DoctorsQuote/DoctorsQuote";

const Doctors = () => {
  return (
    <div>
      <Navigation></Navigation>
      {/* <DoctorsDetail></DoctorsDetail> */}
      <DoctorsQuote></DoctorsQuote>
      {/* <Blog></Blog>
      <ContactUs></ContactUs>
      <Footer></Footer> */}
    </div>
  );
};

export default Doctors;
