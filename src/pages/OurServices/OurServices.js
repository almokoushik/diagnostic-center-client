import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import ServiceCard from "./ServiceCard";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const serviceList = [
    {
        title: "24 HOUR SERVICE",
        description:
            "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
        bgImage: "all_time_service.png",
    },
    {
        title: "QUALIFIED DOCTORS",
        description:
            "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
        bgImage: "qualified_doctor.png",
    },
    {
        title: "EMERGENCY CARE",
        description:
            "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
        bgImage: "emergency_care.png",
    },
    {
        title: "OPERATION THEATER",
        description:
            "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
        bgImage: "operation_room.png",
    },
];

const OurServices = () => {
    return (
        <div style={{ width: "90%", margin: "0px auto 30px" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    columns={{ xs: 12, sm: 12, md: 12 }}
                >
                    {serviceList.map((service, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <ServiceCard
                                    service={service}
                                    key={index}
                                ></ServiceCard>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </div>
    );
};

export default OurServices;
