import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date,setDate]=useState(new Date())
    const [successAlert,setSuccessAlert]=useState(false)
    return (
        <div>
          <Navigation></Navigation>
         <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
         <AvailableAppointment date={date} successAlert={successAlert} setSuccessAlert={setSuccessAlert} setDate={setDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;