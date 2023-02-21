import { Grid, Typography, Box, List, ListItem, Avatar, ListItemIcon } from "@mui/material";
import React from "react";

const Win = () => {
    return <Grid container rowGap={5} className="my-10">
        <Grid xs={12} md={6} item sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        }}>
            <Box component="img" src="/hoho.svg" alt="" className="absolute w-[100px]  z-[3]"
                sx={{
                    left: {
                        md: "4rem", sm: "0", xs: "-1rem"
                    },
                    bottom: {
                        md: 0, sm: -2, xs: "-2rem"
                    }
                }}

            />
            <Box component="img" src="/tomato.svg" alt="" className="absolute w-[100px]  z-[3]"
                sx={{
                    right: {
                        md: "4rem", sm: 1, xs: "-1rem"
                    },
                    top: {
                        md: 0, sm: -2, xs: "-2rem"
                    }

                }}

            />
            <img src="/fork.png" alt="" className="max-h-[300px] max-w-[90%] z-[4]" />

        </Grid>
        <Grid xs={12} md={6} item sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Typography sx={{
                fontFamily: "Quicksand",
                fontWeight: 700,
                pb: '1rem',
                fontSize: "2rem",
            }}  >Foods & Gas</Typography>
            <Typography sx={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "1rem",
                p: 2,
            }}  >For now our services are limited to foods from highrise
                vendors and gas delivery, but Mama Fua app is comming soon, stay tuned</Typography>

            <List>
                <ListItem>
                    <ListItemIcon>
                        <Avatar src="/run.png" sx={{
                            width: "2rem",
                            height: "2rem"
                        }} />
                    </ListItemIcon>
                    <Typography sx={{
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: "1rem",
                    }}  >Free delivery in less than 7 minutes</Typography>

                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Avatar src="/carrot.svg" sx={{
                            width: "2rem",
                            height: "2rem"
                        }} />
                    </ListItemIcon>
                    <Typography sx={{
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: "1rem",
                    }}  >Affordable health foods</Typography>

                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Avatar src="/face.svg" sx={{
                            width: "2rem",
                            height: "2rem"
                        }} />
                    </ListItemIcon>
                    <Typography sx={{
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: "1rem",
                    }}  >Best foods form Highrise Vendors</Typography>

                </ListItem>
            </List>
        </Grid>
    </Grid>;
};

export default Win;
