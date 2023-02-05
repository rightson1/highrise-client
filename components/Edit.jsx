import React from "react";
import Options from "./Options";
import { Drawer } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import OptionEdit from "./OptionEdit";
const Edit = ({ drawer, setDrawer, food }) => {
    const { colors } = useGlobalProvider();
    return <Drawer
        anchor="bottom"
        open={drawer}
        onClose={() => setDrawer(false)}
        sx={{
            '& .MuiDrawer-paper': {
                p: '1rem',
                display: 'flex',
                flexDirection: 'column',
                padding: '3rem 1rem',
                gap: '.3rem',
                background: colors.primary[400],
            },

        }}
    >
        <OptionEdit {...{ food, setDrawer }} />
    </Drawer>
};

export default Edit;
