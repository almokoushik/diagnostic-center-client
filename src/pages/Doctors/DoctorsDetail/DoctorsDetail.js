import React, { useState } from "react";
import { doctorsList } from "../../Home/Doctors/doctorsList";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DoctorProfile from "../DoctorProfile/DoctorProfile";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DoctorsDetail = () => {
  //   console.log(doctorsList);
  const [count, setCount] = useState(8);
  return (
    <Box sx={{ flexGrow: 1, width: "89%", mx: "auto" }}>
      <Grid
        container
        rowSpacing={{ xs: 1 }}
        columnSpacing={{ xs: 2, md: 2 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {doctorsList.slice(0, count).map((doctor, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <DoctorProfile doctor={doctor}></DoctorProfile>
          </Grid>
        ))}
      </Grid>
      {count <= 76 && (
        <button
          onClick={() => setCount(count + 4)}
          style={{
            backgroundColor: "#57C9B6",
            width: "100%",
            padding: "15px 0px",
            fontSize: 24,
            marginTop: 30,
            color: "white",
            border: "none",
            borderRadius: "10px",
          }}
        >
          Load More
        </button>
      )}
    </Box>
  );
};

export default DoctorsDetail;
