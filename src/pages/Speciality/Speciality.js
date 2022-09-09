import React, { useState } from "react";
import SpecialityCard from "./SpecialityCard";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const specialities = [
    {
        title: "Plastic Surgery",
        image: "plasticSurgery.png",
    },
    {
        title: "Rheumatalogy",
        image: "rheumatalogy.png",
    },
    {
        title: "Andrology",
        image: "andrology.png",
    },
    {
        title: "Bacterology",
        image: "bacteriology.png",
    },
    {
        title: "Virology",
        image: "virology.png",
    },
    {
        title: "Renal Medicine",
        image: "renal.png",
    },
    {
        title: "Orthopedic",
        image: "orthopedic.png",
    },
    {
        title: "Cardiovascular",
        image: "cardio.png",
    },
    {
        title: "Teeth Orthodontics",
        image: "teethOrthodontics.png",
    },
    {
        title: "Neurology",
        image: "Neurology.png",
    },
    {
        title: "Cancer",
        image: "cancer.png",
    },
    {
        title: "Eye Treatment",
        image: "eye.png",
    },
    {
        title: "Palmonary Diseases",
        image: "lungs.png",
    },
    {
        title: "Respiratory Diseases",
        image: "abdomen.png",
    },
    {
        title: "Urology",
        image: "urlology.png",
    },
    {
        title: "Reproduction",
        image: "reproduction.png",
    },
    {
        title: "Auditory",
        image: "ear.png",
    },
    {
        title: "Bio Medicine",
        image: "biomedicine.png",
    },
    {
        title: "Endocryinology",
        image: "endocryine.png",
    },
    {
        title: "Immunelogy",
        image: "immunesystem.png",
    },
    {
        title: "Pediatric",
        image: "pedictric.png",
    },
    {
        title: "Neuro Sergeon",
        image: "neurosergeon.png",
    },
    {
        title: "Neuclear Medicine ",
        image: "atomicmedicine.png",
    },
    {
        title: "Neutrition",
        image: "neutrition.png",
    },
    {
        title: "Pchycology",
        image: "pchyciarti.png",
    },
    {
        title: "Radiology",
        image: "radio.png",
    },
    {
        title: "Rhinology",
        image: "rhinology.png",
    },
    {
        title: "Speech Therapy",
        image: "speechtherapy.png",
    },
    {
        title: "Surgery",
        image: "surgery.png",
    },
    {
        title: "Therapy",
        image: "therapy.png",
    },
    {
        title: "Mother Care",
        image: "mothercare.png",
    },
    {
        title: "Toxilogy",
        image: "toxilogy.png",
    },
    {
        title: "Hair Treatment",
        image: "hair.png",
    },
    {
        title: "Pathology",
        image: "pathology.png",
    },
    {
        title: "Angiology",
        image: "angiology.png",
    },
    {
        title: "Virology",
        image: "virology.png",
    },
];

const Speciality = () => {
    const [data, setData] = useState(12);
    return (
        <Box sx={{ flexGrow: 1 }} style={{ width: "90%", margin: " 8% auto" }}>
            <Box sx={{ mb: 5 }}>
                <h2 style={{ color: "#159EEC" }}>ALWAYS CARING</h2>
                <h1>OUR SPECIALITY AND SECTORS</h1>
            </Box>
            <Grid
                container
                rowSpacing={0}
                columnSpacing={{ xs: 0 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
            >
                {specialities.slice(0, data).map((speciality, index) => {
                    return (
                        <Grid item xs={6} sm={4} md={2}>
                            <SpecialityCard
                                speciality={speciality}
                                key={index}
                            ></SpecialityCard>
                        </Grid>
                    );
                })}
            </Grid>
            {data < specialities.length && (
                <button
                    style={{
                        border: "none",
                        width: "100%",
                        backgroundColor: "#BFD2F8",
                        color: "#1F2B6C",
                        padding: "10px 0px",
                        fontSize: "20px",
                        fontWeight: "700",
                        marginTop: "30px",
                        cursor: "pointer",
                    }}
                    onClick={() => setData(data + data)}
                >
                    Load More
                </button>
            )}
        </Box>
    );
};

export default Speciality;
