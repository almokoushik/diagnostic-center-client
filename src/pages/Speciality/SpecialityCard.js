import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const SpecialityCard = ({ speciality }) => {
    const { title, image } = speciality;
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    background: "#F8FBFF",
                    "&:hover": {
                        background: "#FFFFFF",
                        cursor: "pointer",
                    },
                    width: 1,
                    paddingTop: 3,
                },
            }}
        >
            <Paper
                elevation={0}
                sx={{ p: 1 }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#BFD2F8",
                        borderRadius: "50%",
                        height: "100px",
                        width: "100px",
                    }}
                >
                    <img
                        src={require(`../../images/img_vid/${image}`)}
                        alt=""
                        style={{ width: "50%" }}
                    />
                </div>
                <h3>{title}</h3>
            </Paper>
        </Box>
    );
};

export default SpecialityCard;
