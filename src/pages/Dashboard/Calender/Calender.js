import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

export default function StaticDatePickerLandscape() {
    const [value, setValue] = React.useState(new Date());

    const Calender = ({date,setDate}) => {
        return (
            <LocalizationProvider dateAdapter={AdapterDateFns} style={{width:"100%"}}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={date}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        );
    };

    export default Calender;