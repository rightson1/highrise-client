import Search from "@mui/icons-material/Search";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Button, InputBase, Typography } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
const Hero = () => {
    const { colors } = useGlobalProvider()
    return <Box
        display='flex'
        justifyContent="space-between"
        sx={{
            flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: 'row'
            },
            px: {
                xs: 2,

            },
            py: {
                xs: 5,
                sm: 7,
                md: 7
            },
            rowGap: 7,

        }}

    >
        <Box my={3} display="flex" flexDirection="column" justifyContent="center"

            gap={3}

            sx={{
                flex: 2,
                fontFamily: 'Atomic Age ',
                alignItems: {
                    xs: 'center',
                    sm: 'center',
                    md: 'flex-start'
                }

            }}
        >
            <Typography
                variant="h1"
                noWrap

                href="/"

                sx={{

                    fontFamily: 'Gloria Hallelujah',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: colors.grey[100],
                    display: {
                        xs: 'none',
                        md: 'block',
                    },
                    textDecoration: 'none',
                    fontSize: '10rem',

                    flexGrow: {
                        sm: 1,
                        xs: 1,
                        md: 0

                    }
                }}
            >
                Buon
            </Typography>
            <Typography fontWeight="bold" sx={{
                fontFamily: 'Nunito',

                maxWidth: {
                    xm: '80%',
                    md: '350px'
                }
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur sunt reiciendis nobis ipsum? Sit laborum laborum itaque
                officiis aliquam quasi et.
            </Typography>
            <Box display="flex" bgcolor={colors.looking} alignItems="center" p={1}
                sx={{
                    width: {
                        xs: '100%',
                    }
                }}
            >
                <Search /><InputBase placeholder="What are you looking for"
                    sx={{
                        width: '100%',
                    }}
                />
                <Button
                    sx={{
                        bgcolor: colors.find + '!important',

                    }}
                ><ArrowRightAltIcon sx={{
                    color: colors.grey[100],
                    width: '5rem'
                }} /></Button>

            </Box>
        </Box>
        <Box my={3} display="flex" alignItems="center" justifyContent="center"
            sx={{
                position: 'relative',
                flex: 3,
                width: '100%',


            }}

        >
            <Box
                component="img"
                src="/burger.png"
                sx={{
                    zIndex: 6,

                    width: {
                        xs: '60%',
                        sm: '50%',
                        md: '400px'
                    },
                    pr: {
                        xs: 0,
                        md: 10,
                    }
                }}

            />
            <Box
                component="img"
                src="/Vector.svg"
                sx={{
                    position: 'absolute',

                    right: {
                        xs: '-5rem',
                        sm: '-5rem',
                        md: '-10rem'
                    },
                    top: {
                        xs: '-4rem',
                        sm: '-5rem',
                        md: '-5rem'
                    },
                    width: {
                        xs: '60%',
                        sm: '50%',
                        md: '500px'
                    },
                    pr: {
                        xs: 0,
                        md: 10,
                    }
                }}
            />
            <Box
                component="img"
                src="/meat.svg"
                sx={{
                    position: 'absolute',
                    left: {
                        xs: '-5rem',
                        sm: '-5rem',
                        md: '-10rem'
                    },
                    bottom: {
                        xs: '-5rem',
                        sm: '-5rem',
                        md: '-5rem'
                    },
                    width: {
                        xs: '60%',
                        sm: '50%',
                        md: '500px'
                    },
                    pr: {
                        xs: 0,
                        md: 10,
                    }
                }}
            />
            <Box
                component="img"
                src="/rice.png"
                sx={{
                    position: 'absolute',
                    right: {
                        xs: '45%',
                        sm: '50%',
                        md: '60%'
                    },
                    top: {
                        xs: '-3rem',
                        sm: '-5rem',
                        md: '-1rem'
                    },
                    width: '100px',

                }}
            />
            <Box
                component="img"
                src="/chicken.png"
                sx={{
                    position: 'absolute',
                    zIndex: 6,
                    left: {
                        xs: '65%',
                        sm: '60%',
                        md: '60%'
                    },
                    bottom: {
                        xs: '-3rem',
                        sm: '-3rem',
                        md: '0rem'
                    },
                    width: '100px',

                }}
            />
            <Typography
                variant="h2"
                noWrap
                component="a"
                href="/"

                sx={{
                    position: 'absolute',
                    top: '-30px',
                    left: '0px',
                    fontFamily: 'Gloria Hallelujah',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: colors.grey[100],
                    display: {
                        xs: 'block',
                        md: 'none'
                    }

                }}
            >
                Buon
            </Typography>

            <Typography
                variant="h2"
                noWrap

                sx={{
                    position: 'absolute',
                    bottom: '-60px',
                    right: '0px',
                    fontFamily: 'Gloria Hallelujah',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: colors.grey[100],
                    fontSize: {
                        xs: '2rem',
                        md: '3rem'
                    },
                    position: 'absolute',
                    zIndex: 6,
                    left: {
                        xs: '40%',
                        sm: '60%',
                        md: '60%'
                    },
                    bottom: {
                        xs: '-5rem',
                        sm: '-5rem',

                    }

                }}
            >
                appetito
            </Typography>
        </Box>
    </Box>;
};

export default Hero;
