import React, { useRef, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Rating } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from "../utils/themeContext";
const RowContainer = ({ flag, scrollValue }) => {
    const rowContainer = useRef();
    const { colors } = useGlobalProvider(0)
    const [items, setItems] = useState([]);


    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);


    return <div
        ref={rowContainer}

        className={`w-full flex gap-3  my-12 py-2 scroll-smooth row  ${!flag
            ? "overflow-x-scroll scrollbar-none "
            : "overflow-x-hidden flex-wrap justify-center"
            }`}
    >
        {data?.map((item, index) => (

            <Box
                key={index}


            >
                <Card className="md:max-w-[300px] min-w-[250px] 
         bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="100"
                        sx={{
                            maxHeight: '140px !important',
                            objectFit: 'contain !important',
                            p: 1,

                        }}

                        image={item.imageSrc}
                    />
                    <CardContent sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: 'column'
                    }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontFamily: 'Nunito',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                        }}>
                            {item.name}
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="large" />
                        <Typography gutterBottom sx={{
                            fontFamily: 'Nunito',
                            fontWeight: 700,
                            fontSize: '.8rem',
                            textAlign: 'center'
                        }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        width: '100%'
                    }}>
                        <Button size="small" sx={{
                            color: `${colors.grey[100]} !important`
                        }}>ksh {1000}</Button>
                        <Button size="small" sx={{
                            color: `${colors.grey[100]} !important`,
                            backgroundColor: `${colors.red[100]} !important`,
                            border: `2px solid ${colors.red[400]} !important`,
                        }}>View Store</Button>
                    </CardActions>
                </Card>

            </Box>

        ))}
    </div>;
};

export const data = [{
    id: 1,
    name: "Mesh Eats",
    decp: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: "/img/i1.png",
},
{
    id: 2,
    name: "Rightson Foods",
    decp: "",
    price: "10.25",
    imageSrc: "/img/f1.png",
},
{
    id: 3,
    name: "Chicken Kebab",
    decp: "Stop Eats",
    price: "8.25",
    imageSrc: "/img/c3.png",
},
{
    id: 4,
    name: "Fish Highrise Eats",
    decp: "Mixed Fish Kebab",
    price: "5.25",
    imageSrc: "/img/fi1.png",
},
];


export default RowContainer;
