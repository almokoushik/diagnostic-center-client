import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Register = () => {
    return (
        <div>
           <Navigation></Navigation>
           <RegisterForm></RegisterForm>
           <Footer></Footer>
            
        </div>
    );
};

export default Register;