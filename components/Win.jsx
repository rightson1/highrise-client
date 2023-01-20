import { Grid, Typography, Box, List, ListItem, Avatar, ListItemIcon } from "@mui/material";
import React from "react";

const Win = () => {
    return <Grid container rowGap={5} className="">
        <Grid xs={12} md={6} item sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        }}>
            <Box component="img" src="/hoho.svg" alt="" className="absolute w-[100px] bottom-0 z-[3]"
                sx={{
                    left: {
                        md: "4rem", sm: "0", xs: -1
                    },
                }}

            />
            <Box component="img" src="/tomato.svg" alt="" className="absolute w-[100px]  z-[3]"
                sx={{
                    right: {
                        md: "4rem", sm: 1, xs: 1
                    },
                    top: {
                        md: 0, sm: -2, xs: -1
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
            }}  >Highrise Foods</Typography>
            <Typography sx={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "1rem",
            }}  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolore illum recusandae.</Typography>

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
                    }}  >Cheap health foods</Typography>

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
