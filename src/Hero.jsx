import React from "react";
import { Box, Card, CardMedia } from "@mui/material";
import { AvatarPic } from './assets';


function Hero() {

    return (
        <Box>
            <Card>
                <CardMedia image={AvatarPic} />
            </Card>
        </Box>
    );
}

export default Hero;